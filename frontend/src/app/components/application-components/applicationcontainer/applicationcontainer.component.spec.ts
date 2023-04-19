import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationcontainerComponent } from './applicationcontainer.component';

describe('ApplicationcontainerComponent', () => {
  let component: ApplicationcontainerComponent;
  let fixture: ComponentFixture<ApplicationcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
