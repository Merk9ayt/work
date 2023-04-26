import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateResultDefinitionDigitalViewComponent } from './study-template-result-definition-digital-view.component';

describe('StudyResultDefinitionDigitalViewComponent', () => {
  let component: StudyTemplateResultDefinitionDigitalViewComponent;
  let fixture: ComponentFixture<StudyTemplateResultDefinitionDigitalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateResultDefinitionDigitalViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyTemplateResultDefinitionDigitalViewComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
