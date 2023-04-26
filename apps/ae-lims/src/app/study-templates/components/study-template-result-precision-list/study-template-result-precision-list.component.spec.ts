import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultPrecisionListComponent } from './study-template-result-precision-list.component';

describe('StudyResultPrecisionListComponent', () => {
  let component: StudyTemplateResultPrecisionListComponent;
  let fixture: ComponentFixture<StudyTemplateResultPrecisionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultPrecisionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultPrecisionListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
