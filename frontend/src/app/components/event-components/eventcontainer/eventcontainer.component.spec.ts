import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcontainerComponent } from './eventcontainer.component';

describe('EventcontainerComponent', () => {
  let component: EventcontainerComponent;
  let fixture: ComponentFixture<EventcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
