import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationContainerComponent } from './application-container.component';

describe('ApplicationcontainerComponent', () => {
  let component: ApplicationContainerComponent;
  let fixture: ComponentFixture<ApplicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
