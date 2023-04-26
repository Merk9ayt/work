import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabMenuContentComponent } from './tab-menu-content.component';

describe('TabMenuContentComponent', () => {
  let component: TabMenuContentComponent;
  let fixture: ComponentFixture<TabMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabMenuContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
