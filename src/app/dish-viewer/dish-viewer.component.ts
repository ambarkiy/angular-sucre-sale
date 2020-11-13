import { Component, Input, OnInit } from '@angular/core';
import { DishesGroup } from '../model/dish';

@Component({
  selector: 'app-dish-viewer',
  templateUrl: './dish-viewer.component.html',
  styleUrls: ['./dish-viewer.component.scss'],
})
export class DishViewerComponent implements OnInit {
  @Input() dishesGroups: DishesGroup[];

  constructor() {}

  ngOnInit(): void {
    
  }
}
