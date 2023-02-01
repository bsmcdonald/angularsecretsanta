import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestrictionDialogComponent } from './user-restriction-dialog.component';

describe('UserRestrictionDialogComponent', () => {
  let component: UserRestrictionDialogComponent;
  let fixture: ComponentFixture<UserRestrictionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestrictionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestrictionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
