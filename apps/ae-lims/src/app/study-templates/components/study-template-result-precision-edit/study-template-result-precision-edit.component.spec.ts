import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultPrecisionEditComponent } from './study-template-result-precision-edit.component';

describe('StudyResultPrecisionEditComponent', () => {
  let component: StudyTemplateResultPrecisionEditComponent;
  let fixture: ComponentFixture<StudyTemplateResultPrecisionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultPrecisionEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultPrecisionEditComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
