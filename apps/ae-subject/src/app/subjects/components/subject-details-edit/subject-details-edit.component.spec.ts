import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SubjectDetailsEditComponent} from "./subject-details-edit.component";

describe('AeTemplateEditComponent', () => {
  let component: SubjectDetailsEditComponent;
  let fixture: ComponentFixture<SubjectDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectDetailsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
