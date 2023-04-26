import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourceDetailsViewComponent } from './sample-source-details-view.component';

describe('SampleSourceDetailsViewComponent', () => {
  let component: SampleSourceDetailsViewComponent;
  let fixture: ComponentFixture<SampleSourceDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourceDetailsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourceDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
