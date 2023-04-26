import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StudyTemplatesPageComponent} from './study-templates-page.component';

describe('StudyTemplatesComponent', () => {
  let component: StudyTemplatesPageComponent;
  let fixture: ComponentFixture<StudyTemplatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyTemplatesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyTemplatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
