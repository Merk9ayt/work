import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateCardComponent } from './study-order-template-card.component';

describe('StudyTemplateCardComponent', () => {
  let component: StudyOrderTemplateCardComponent;
  let fixture: ComponentFixture<StudyOrderTemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyOrderTemplateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
