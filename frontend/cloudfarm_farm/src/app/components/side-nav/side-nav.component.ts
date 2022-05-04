import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home',          title: 'Home',              icon: 'nc-bank',                      class: '' },
  { path: '/farms',         title: 'My Farms',          icon: 'nc-sun-fog-29',                class: '' },
  { path: '/settings',       title: 'Settings',         icon: 'nc-settings-gear-65',          class: '' }
  //{ path: '/resources',     title: 'Resources',       icon: 'nc-store-house',               class: '' }
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public menuItems!: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
