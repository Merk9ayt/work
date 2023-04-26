import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateSampleListItemViewComponent } from './study-template-sample-list-item-view.component';

describe('SampleListItemComponent', () => {
  let component: StudyTemplateSampleListItemViewComponent;
  let fixture: ComponentFixture<StudyTemplateSampleListItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateSampleListItemViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplateSampleListItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
