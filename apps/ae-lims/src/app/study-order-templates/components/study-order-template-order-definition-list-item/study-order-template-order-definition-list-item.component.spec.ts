import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateOrderDefinitionListItemComponent } from './study-order-template-order-definition-list-item.component';

describe('StudyResultPrecisionListItemViewComponent', () => {
  let component: StudyOrderTemplateOrderDefinitionListItemComponent;
  let fixture: ComponentFixture<StudyOrderTemplateOrderDefinitionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateOrderDefinitionListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyOrderTemplateOrderDefinitionListItemComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
