import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecretSantaComponent } from './new-secret-santa.component';

describe('NewSecretSantaComponent', () => {
  let component: NewSecretSantaComponent;
  let fixture: ComponentFixture<NewSecretSantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSecretSantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSecretSantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
