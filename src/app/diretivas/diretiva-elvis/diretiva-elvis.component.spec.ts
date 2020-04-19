import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaElvisComponent } from './diretiva-elvis.component';

describe('DiretivaElvisComponent', () => {
  let component: DiretivaElvisComponent;
  let fixture: ComponentFixture<DiretivaElvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaElvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
