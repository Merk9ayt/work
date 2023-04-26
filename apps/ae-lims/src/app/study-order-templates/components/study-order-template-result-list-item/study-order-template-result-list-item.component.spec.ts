import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateResultListItemComponent } from './study-order-template-result-list-item.component';

describe('StudyResultPrecisionListItemViewComponent', () => {
  let component: StudyOrderTemplateResultListItemComponent;
  let fixture: ComponentFixture<StudyOrderTemplateResultListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateResultListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyOrderTemplateResultListItemComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
