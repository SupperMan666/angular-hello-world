import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChenComponent } from './chen.component';

describe('ChenComponent', () => {
  let component: ChenComponent;
  let fixture: ComponentFixture<ChenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
