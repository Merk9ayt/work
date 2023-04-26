import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultPrecisionListItemViewComponent } from './study-template-result-precision-list-item-view.component';

describe('StudyResultPrecisionListItemViewComponent', () => {
  let component: StudyTemplateResultPrecisionListItemViewComponent;
  let fixture: ComponentFixture<StudyTemplateResultPrecisionListItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultPrecisionListItemViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultPrecisionListItemViewComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
