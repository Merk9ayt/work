import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplatesListComponent } from './study-order-templates-list.component';

describe('AeLimsStudyTemplatesListComponent', () => {
  let component: StudyOrderTemplatesListComponent;
  let fixture: ComponentFixture<StudyOrderTemplatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplatesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyOrderTemplatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
