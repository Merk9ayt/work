import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourceCardComponent } from './sample-source-card.component';

describe('StudyTemplateCardComponent', () => {
  let component: SampleSourceCardComponent;
  let fixture: ComponentFixture<SampleSourceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
