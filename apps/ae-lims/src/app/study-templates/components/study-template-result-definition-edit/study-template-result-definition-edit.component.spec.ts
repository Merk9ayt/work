import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultDefinitionEditComponent } from './study-template-result-definition-edit.component';

describe('StudyResultDefinitionEditComponent', () => {
  let component: StudyTemplateResultDefinitionEditComponent;
  let fixture: ComponentFixture<StudyTemplateResultDefinitionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultDefinitionEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultDefinitionEditComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
