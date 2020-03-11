import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourousalComponent } from './courousal.component';

describe('CourousalComponent', () => {
  let component: CourousalComponent;
  let fixture: ComponentFixture<CourousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
