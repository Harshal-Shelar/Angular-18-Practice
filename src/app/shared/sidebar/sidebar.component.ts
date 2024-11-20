import { Component, Inject, VERSION } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor() { }
  ngOnInit() {
    let sidebar : any = document.querySelector('.sidebar');
    let closeBtn : any = document.querySelector('#btn');
    let searchBtn : any = document.querySelector('.bx-search');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuBtnChange();
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuBtnChange()
    });

    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    }
  }
}
