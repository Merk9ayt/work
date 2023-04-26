import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplatesPageComponent } from './study-order-templates-page.component';

describe('StudyTemplatesComponent', () => {
  let component: StudyOrderTemplatesPageComponent;
  let fixture: ComponentFixture<StudyOrderTemplatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplatesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyOrderTemplatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
