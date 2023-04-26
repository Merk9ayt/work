import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateResultListComponent } from './study-order-template-result-list.component';

describe('StudyResultDefinitionListViewComponent', () => {
  let component: StudyOrderTemplateResultListComponent;
  let fixture: ComponentFixture<StudyOrderTemplateResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateResultListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyOrderTemplateResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
