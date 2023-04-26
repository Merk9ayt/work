import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateVersionViewComponent } from './study-template-version-view.component';

describe('StudyTemplateVersionViewComponent', () => {
  let component: StudyTemplateVersionViewComponent;
  let fixture: ComponentFixture<StudyTemplateVersionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateVersionViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplateVersionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
