import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBannerComponent } from './s-banner.component';

describe('SBannerComponent', () => {
  let component: SBannerComponent;
  let fixture: ComponentFixture<SBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
