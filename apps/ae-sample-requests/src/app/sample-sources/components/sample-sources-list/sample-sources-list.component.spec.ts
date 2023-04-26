import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourcesListComponent } from './sample-sources-list.component';

describe('AeLimsStudyTemplatesListComponent', () => {
  let component: SampleSourcesListComponent;
  let fixture: ComponentFixture<SampleSourcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourcesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
