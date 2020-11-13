import { Component, OnInit } from '@angular/core';
import { Address } from './model/address';
import { DishesGroup } from './model/dish';
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
  adminLinks : Link[];
  socialLinks : Link[];
  dishesGroups: DishesGroup[];




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
    this.adminLinks =  [{name:'CGU', href:'/cgu'},{name:'CGV', href:'/cgv'}];
    this.socialLinks = [{name:'Facebook', href:'/facebook'}, {name:'Twitter', href:'/twitter'}, {name:'SnapChat', href:'/snapChat'}];
    this.dishesGroups = [
      {
        groupName: 'ASSIETTES',
        dishes: [
          {
            name: 'Kebab',
            price: '8.50€',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande kebab, frite, salade, sauces au choix, canette au choix',
          },
          {
            name: 'Kefta',
            price: '8.50€',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande kefta, frite, salade, sauces au choix, canette au choix',
          },
          {
            name: 'Poulet',
            price: '8.50€',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande poulet, frite, salade, sauces au choix, canette au choix',
          },
        ],
      },
      {
        groupName: 'PIZZAS',
        dishes: [
          {
            name: 'MOUSSAKA',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, viande hachée, aubergines grillées, tomates fraîches, champignons, olives',
          },
          {
            name: 'RACLETTE',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, poulet fumé, émincé de poulet, pommes de terre, fromage à raclette',
          },
          {
            name: 'FERMIERE',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, émincé de poulet, pommes de terre, oignons',
          },
          {
            name: 'TEXAS',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, chorizo, pepperoni, oignons, olives',
          },
          {
            name: 'BUFFALO',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, sauce barbecue, fromage, viande hachée, oignons, poivrons',
          },
          {
            name: 'MIAMI',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, sauce barbecue, fromage, viande hachée, poulet fumé, olives, piments',
          },
          {
            name: 'CAMPIONE',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, viande hachée, champignons, oeuf',
          },
          {
            name: 'ORIENTALE',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, champignons, merguez, oeuf',
          },
          {
            name: '4 FROMAGES',
            price: '6.50€',
            img: 'assets/dish/pizza.svg',
            composition:
              'Tomate, fromage, poulet fumé, émincé de poulet, pommes de terre, fromage à raclette',
          }
        ],
      },
      {
        groupName: 'SANDWICHS',
        dishes: [
          {
            name: 'Kebab',
            price: '5.50',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande kebab, frite, salade, sauces au choix, canette au choix',
          },
          {
            name: 'Kefta',
            price: '5.50',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande kefta, frite, salade, sauces au choix, canette au choix',
          },
          {
            name: 'Poulet',
            price: '5.50',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande poulet, frite, salade, sauces au choix, canette au choix',
          },
        ],
      },
      {
        groupName: 'TACOS',
        dishes: [
          {
            name: 'Kebab',
            price: '8.50',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande kebab, frite, salade, sauces au choix, canette au choix',
          },
          {
            name: 'Kefta',
            price: '8.50',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande kefta, frite, salade, sauces au choix, canette au choix',
          },
          {
            name: 'Poulet',
            price: '8.50',
            img: 'assets/dish/frite.svg',
            composition:
              'Viande poulet, frite, salade, sauces au choix, canette au choix',
          },
        ],
      },
    ];
  }
}
