import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplatesListComponent } from './study-templates-list.component';

describe('AeLimsStudyTemplatesListComponent', () => {
  let component: StudyTemplatesListComponent;
  let fixture: ComponentFixture<StudyTemplatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplatesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
