import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  upload(files: Set<File>, url: string) {
    const formData = new FormData();

    files.forEach(file => formData.append('file', file, file.name));

    return this.httpClient.post(url, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

  download(url: string) {
    return this.httpClient.get(url, {
      responseType: 'blob' as 'json'
      // reportProgress
    });
  }

  fileHandle(resp: any, nomeArquivo: string) {
    const file = new Blob([resp], { type: resp.type });

    // IE
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = nomeArquivo;

    // link.click();
    link.dispatchEvent(new MouseEvent('click', { // Firefox
      bubbles: true,
      cancelable: true,
      view: window
    }));

    setTimeout(() => { // Firefox
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
}
