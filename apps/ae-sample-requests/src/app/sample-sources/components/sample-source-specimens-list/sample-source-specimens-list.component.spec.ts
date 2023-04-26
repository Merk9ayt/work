import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourceSpecimensListComponent } from './sample-source-specimens-list.component';

describe('SampleSourceSpecimensListComponent', () => {
  let component: SampleSourceSpecimensListComponent;
  let fixture: ComponentFixture<SampleSourceSpecimensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourceSpecimensListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourceSpecimensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
