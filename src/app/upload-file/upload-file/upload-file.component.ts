import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { uploadProgress, filterResponse } from '../rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  preserveWhitespaces: true
})
export class UploadFileComponent implements OnInit, OnDestroy {

  @ViewChild('fileUpload', {static: true}) fileUpload: ElementRef;

  fileNames: string;
  files: Set<File>;
  progress: number; // [];
  inscricaoUpload: Subscription;

  constructor(
    private uploadService: UploadFileService
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.fileUpload.nativeElement.click();
  }

  onChange(event) {
    const filesArr = [];

    const selectedFiles = event.srcElement.files as FileList;
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      filesArr.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    this.fileNames = filesArr.join(', ');

    // this.progress.forEach(p => p = 0);
    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.inscricaoUpload = this.uploadService.upload(this.files, `${environment.API_UPLOAD}/upload`)
      .pipe(
        uploadProgress(progress => {
          console.log(progress);
          this.progress = progress;
        }),
        filterResponse()
      )
      .subscribe(response => console.log('Upload concluído'));
      // .subscribe((event: HttpEvent<Object>) => {
      //   console.log('event: ', event);
      //   if (event.type === HttpEventType.Response) {
      //     console.log('Upload concluído');
      //   }
      //   else if (event.type === HttpEventType.UploadProgress) {
      //     const porcentDone = Math.round((event.loaded * 100) / event.total);
      //     console.log('progress: ', porcentDone);
      //     this.progress = porcentDone;
      //   }
      // });
    }
  }

  onDownload() {
    this.uploadService.download(`${environment.API_UPLOAD}/downloadPdf`)
    .subscribe((resp: any) => {
      this.uploadService.fileHandle(resp, 'arquivo-download.pdf');
    });
  }

  ngOnDestroy(): void {
    if (this.inscricaoUpload) {
      this.inscricaoUpload.unsubscribe();
    }
  }
}
