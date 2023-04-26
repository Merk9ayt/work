import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultDefinitionListItemViewComponent } from './study-template-result-definition-list-item-view.component';

describe('StudyResultDefinitionListItemViewComponent', () => {
  let component: StudyTemplateResultDefinitionListItemViewComponent;
  let fixture: ComponentFixture<StudyTemplateResultDefinitionListItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultDefinitionListItemViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultDefinitionListItemViewComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
