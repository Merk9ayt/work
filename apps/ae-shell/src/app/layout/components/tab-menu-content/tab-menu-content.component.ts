import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
  selector: 'ae-tabmenu-tab',
  templateUrl: './tab-menu-content.component.html',
  styleUrls: ['./tab-menu-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabMenuContentComponent implements AfterViewInit {
  @ViewChild('scroller')
  private layoutMenuScrollerViewChild?: ScrollPanel;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.layoutMenuScrollerViewChild?.moveBar();
    }, 100);
  }

  onClick(event: Event): void {
    setTimeout(() => {
      this.layoutMenuScrollerViewChild?.moveBar();
    }, 450);
  }
}
