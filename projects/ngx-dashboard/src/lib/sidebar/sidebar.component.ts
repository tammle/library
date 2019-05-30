import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input() sidebarTemplate: TemplateRef<any>
}
