import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/domain/models/menu';
import { MenuService } from 'src/domain/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: Menu;

  constructor(private menuService : MenuService) { }

  ngOnInit(): void {
    this.menu = this.menuService.get();
  }
}
