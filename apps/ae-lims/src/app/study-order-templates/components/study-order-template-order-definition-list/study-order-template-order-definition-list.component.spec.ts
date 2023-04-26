import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyOrderTemplateOrderDefinitionListComponent } from './study-order-template-order-definition-list.component';

describe('StudyResultDefinitionListViewComponent', () => {
  let component: StudyOrderTemplateOrderDefinitionListComponent;
  let fixture: ComponentFixture<StudyOrderTemplateOrderDefinitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudyOrderTemplateOrderDefinitionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StudyOrderTemplateOrderDefinitionListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
