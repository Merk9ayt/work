import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateResultListItemGridComponent } from './study-order-template-result-list-item-grid.component';

describe('StudyResultPrecisionListItemViewComponent', () => {
  let component: StudyOrderTemplateResultListItemGridComponent;
  let fixture: ComponentFixture<StudyOrderTemplateResultListItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateResultListItemGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyOrderTemplateResultListItemGridComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
