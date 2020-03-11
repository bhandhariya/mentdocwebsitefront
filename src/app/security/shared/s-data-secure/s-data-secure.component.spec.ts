import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDataSecureComponent } from './s-data-secure.component';

describe('SDataSecureComponent', () => {
  let component: SDataSecureComponent;
  let fixture: ComponentFixture<SDataSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDataSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDataSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
