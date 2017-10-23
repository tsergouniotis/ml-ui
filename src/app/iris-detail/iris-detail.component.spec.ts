import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisDetailComponent } from './iris-detail.component';

describe('IrisDetailComponent', () => {
  let component: IrisDetailComponent;
  let fixture: ComponentFixture<IrisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
