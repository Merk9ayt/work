import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateDetailsEditComponent } from './study-order-template-details-edit.component';

describe('AeTemplateEditComponent', () => {
  let component: StudyOrderTemplateDetailsEditComponent;
  let fixture: ComponentFixture<StudyOrderTemplateDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateDetailsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyOrderTemplateDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
