import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultDefinitionViewComponent } from './study-template-result-definition-view.component';

describe('StudyResultDefinitionViewComponent', () => {
  let component: StudyTemplateResultDefinitionViewComponent;
  let fixture: ComponentFixture<StudyTemplateResultDefinitionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultDefinitionViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultDefinitionViewComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
