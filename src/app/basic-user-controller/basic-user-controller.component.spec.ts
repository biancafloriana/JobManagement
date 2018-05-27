import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserControllerComponent } from './basic-user-controller.component';

describe('BasicUserControllerComponent', () => {
  let component: BasicUserControllerComponent;
  let fixture: ComponentFixture<BasicUserControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUserControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
