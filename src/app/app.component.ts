import { Component, OnInit } from '@angular/core';
import { Address } from './model/address';
import { DishesGroup } from './model/dish';
import { DishCategory } from './model/dish-category';
import { Link } from './model/link';
import { DishService } from './service/dish.service';
import { RestaurantService } from './service/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sucre-sale';
  logo: string;
  address: Address;
  links: Link[];
  adminLinks: Link[];
  socialLinks: Link[];
  dishesGroups: DishesGroup[];

  constructor(
    private dishService: DishService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.logo = 'Sucré Salé';
    this.dishesGroups = this.dishService.getDishesGroups();
    this.address = this.restaurantService.getAddress();
    this.links = this.dishesGroups.map((dishesGroup) => ({
      name: dishesGroup.groupName,
      href: `#${dishesGroup.groupName.toLowerCase()}`,
    }));
    this.adminLinks = this.restaurantService.getAdminLinks();
    this.socialLinks = this.restaurantService.getSocialLinks();
  }
}
