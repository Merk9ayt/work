import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleSourceDetailsEditComponent } from './sample-source-details-edit.component';

describe('AeTemplateEditComponent', () => {
  let component: SampleSourceDetailsEditComponent;
  let fixture: ComponentFixture<SampleSourceDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleSourceDetailsEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleSourceDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
