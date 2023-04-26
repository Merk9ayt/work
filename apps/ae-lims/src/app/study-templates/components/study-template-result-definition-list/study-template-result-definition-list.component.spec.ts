import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultDefinitionListComponent } from './study-template-result-definition-list.component';

describe('StudyResultDefinitionListViewComponent', () => {
  let component: StudyTemplateResultDefinitionListComponent;
  let fixture: ComponentFixture<StudyTemplateResultDefinitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultDefinitionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultDefinitionListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
