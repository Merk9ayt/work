import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultDefinitionDigitalEditComponent } from './study-template-result-definition-digital-edit.component';

describe('StudyResultDefinitionDigitalEditComponent', () => {
  let component: StudyTemplateResultDefinitionDigitalEditComponent;
  let fixture: ComponentFixture<StudyTemplateResultDefinitionDigitalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultDefinitionDigitalEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultDefinitionDigitalEditComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
