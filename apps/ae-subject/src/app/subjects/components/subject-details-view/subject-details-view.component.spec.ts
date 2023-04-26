import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SubjectDetailsViewComponent} from "./subject-details-view.component";

describe('StudyTemplateDetailsViewComponent', () => {
  let component: SubjectDetailsViewComponent;
  let fixture: ComponentFixture<SubjectDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectDetailsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
