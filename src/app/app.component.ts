import { Component, OnInit } from '@angular/core';
import { Address } from './model/address';
import { DishCategory } from './model/dish-category';
import { Link } from './model/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sucre-sale';
  logo: string;
  address: Address;
  dishCategories: DishCategory[];
  links: Link[];

  ngOnInit(): void {
    this.logo = 'Sucré Salé';
    this.address = {
      name: 'Sucré Salé',
      street: '8 pl 3 Rois',
      zip: '60180',
      city: 'NOGENT SUR OISE',
      phone: '+33344530517',
    };

    this.dishCategories = [
      { name: 'ASSIETTES' },
      { name: 'PIZZAS' },
      { name: 'SANDWICHS' },
      { name: 'TACOS' },
    ];

    this.links = this.dishCategories.map((dishCategory) => ({
      name: dishCategory.name,
      href: `#${dishCategory.name.toLowerCase()}`,
    }));
  }
}
