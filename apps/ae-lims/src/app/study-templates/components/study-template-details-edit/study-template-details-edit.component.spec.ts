import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateDetailsEditComponent } from './study-template-details-edit.component';

describe('AeTemplateEditComponent', () => {
  let component: StudyTemplateDetailsEditComponent;
  let fixture: ComponentFixture<StudyTemplateDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateDetailsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplateDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
