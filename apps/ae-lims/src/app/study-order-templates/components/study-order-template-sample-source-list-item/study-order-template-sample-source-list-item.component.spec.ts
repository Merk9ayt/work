import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateSampleSourceListItemComponent } from './study-order-template-sample-source-list-item.component';

describe('StudyResultPrecisionListItemViewComponent', () => {
  let component: StudyOrderTemplateSampleSourceListItemComponent;
  let fixture: ComponentFixture<StudyOrderTemplateSampleSourceListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateSampleSourceListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyOrderTemplateSampleSourceListItemComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
