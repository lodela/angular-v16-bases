import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterFormComponent } from './add-character-form.component';

describe('AddCharacterFormComponent', () => {
  let component: AddCharacterFormComponent;
  let fixture: ComponentFixture<AddCharacterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCharacterFormComponent]
    });
    fixture = TestBed.createComponent(AddCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
