import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateDetailsViewComponent } from './study-template-details-view.component';

describe('StudyTemplateDetailsViewComponent', () => {
  let component: StudyTemplateDetailsViewComponent;
  let fixture: ComponentFixture<StudyTemplateDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateDetailsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplateDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
