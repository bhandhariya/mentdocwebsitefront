import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownappComponent } from './downapp.component';

describe('DownappComponent', () => {
  let component: DownappComponent;
  let fixture: ComponentFixture<DownappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
