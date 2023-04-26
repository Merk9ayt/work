import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleListViewComponent } from './sample-list-view.component';

describe('ComponentListComponent', () => {
  let component: SampleListViewComponent;
  let fixture: ComponentFixture<SampleListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleListViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
