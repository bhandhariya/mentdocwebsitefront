import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDataMixComponent } from './s-data-mix.component';

describe('SDataMixComponent', () => {
  let component: SDataMixComponent;
  let fixture: ComponentFixture<SDataMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDataMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDataMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
