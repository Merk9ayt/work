import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourceSpecimenItemViewComponent } from './sample-source-specimen-item-view.component';

describe('SampleSourceSpecimenItemComponent', () => {
  let component: SampleSourceSpecimenItemViewComponent;
  let fixture: ComponentFixture<SampleSourceSpecimenItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourceSpecimenItemViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourceSpecimenItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
