import { AfterViewInit, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit {

    ngAfterViewInit(): void {
      initFlowbite();
    }
}
