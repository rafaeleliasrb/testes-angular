import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgContentComponent } from './diretiva-ng-content.component';

describe('DiretivaNgContentComponent', () => {
  let component: DiretivaNgContentComponent;
  let fixture: ComponentFixture<DiretivaNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
