import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyTemplateCardComponent } from './study-template-card.component';

describe('StudyTemplateCardComponent', () => {
  let component: StudyTemplateCardComponent;
  let fixture: ComponentFixture<StudyTemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplateCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
