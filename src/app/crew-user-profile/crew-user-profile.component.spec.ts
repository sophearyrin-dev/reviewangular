import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewUserProfileComponent } from './crew-user-profile.component';

describe('CrewUserProfileComponent', () => {
  let component: CrewUserProfileComponent;
  let fixture: ComponentFixture<CrewUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
