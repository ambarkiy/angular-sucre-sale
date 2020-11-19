import { Component, OnInit } from '@angular/core';
import { Address } from 'src/domain/models/address';
import { Link } from 'src/domain/models/link';
import { MenuService } from 'src/domain/services/menu.service';
import { RestaurantService } from 'src/domain/services/restaurant.service';


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

  constructor(
    private dishService: MenuService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.logo = 'Sucré Salé';
    this.address = this.restaurantService.getAddress();
    this.links = this.dishService.get().sections.map((section) => ({
      name: section.name,
      href: `#${section.name.toLowerCase()}`,
    }));
    this.adminLinks = this.restaurantService.getAdminLinks();
    this.socialLinks = this.restaurantService.getSocialLinks();
  }
}
