import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateDetailsViewComponent } from './study-order-template-details-view.component';

describe('StudyTemplateDetailsViewComponent', () => {
  let component: StudyOrderTemplateDetailsViewComponent;
  let fixture: ComponentFixture<StudyOrderTemplateDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateDetailsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyOrderTemplateDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
