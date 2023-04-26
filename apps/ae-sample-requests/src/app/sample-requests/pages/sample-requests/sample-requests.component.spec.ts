import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleRequestsComponent } from './sample-requests.component';

describe('SampleRequestsComponent', () => {
  let component: SampleRequestsComponent;
  let fixture: ComponentFixture<SampleRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
