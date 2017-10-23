import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisComponent } from './iris.component';

describe('IrisComponent', () => {
  let component: IrisComponent;
  let fixture: ComponentFixture<IrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
