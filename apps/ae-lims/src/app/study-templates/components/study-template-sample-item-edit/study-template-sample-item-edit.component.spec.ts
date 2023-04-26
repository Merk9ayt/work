import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateSampleItemEditComponent } from './study-template-sample-item-edit.component';

describe('SampleGridItemEditComponent', () => {
  let component: StudyTemplateSampleItemEditComponent;
  let fixture: ComponentFixture<StudyTemplateSampleItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateSampleItemEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplateSampleItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
