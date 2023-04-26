import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationSubMenuComponent } from './application-sub-menu.component';

describe('ApplicationSubMenuComponent', () => {
  let component: ApplicationSubMenuComponent;
  let fixture: ComponentFixture<ApplicationSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationSubMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
