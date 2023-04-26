import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourcesPageComponent } from './sample-sources-page.component';

describe('StudyTemplatesComponent', () => {
  let component: SampleSourcesPageComponent;
  let fixture: ComponentFixture<SampleSourcesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourcesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
