import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateSampleSourceListComponent } from './study-order-template-sample-source-list.component';

describe('StudyResultDefinitionListViewComponent', () => {
  let component: StudyOrderTemplateSampleSourceListComponent;
  let fixture: ComponentFixture<StudyOrderTemplateSampleSourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateSampleSourceListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyOrderTemplateSampleSourceListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
