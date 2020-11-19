import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';


@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  get(): Menu {
    return {
      sections: [
        {
          name: 'ASSIETTES',
          items: [
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
          name: 'PIZZAS',
          items: [
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
              composition: 'Tomate, fromage, viande hachée, champignons, oeuf',
            },
            {
              name: 'ORIENTALE',
              price: '6.50€',
              img: 'assets/dish/pizza.svg',
              composition: 'Tomate, fromage, champignons, merguez, oeuf',
            },
            {
              name: '4 FROMAGES',
              price: '6.50€',
              img: 'assets/dish/pizza.svg',
              composition:
                'Tomate, fromage, poulet fumé, émincé de poulet, pommes de terre, fromage à raclette',
            },
          ],
        },
        {
          name: 'SANDWICHS',
          items: [
            {
              name: 'Kebab',
              price: '5.50€',
              img: 'assets/dish/frite.svg',
              composition:
                'Viande kebab, frite, salade, sauces au choix, canette au choix',
            },
            {
              name: 'Kefta',
              price: '5.50€',
              img: 'assets/dish/frite.svg',
              composition:
                'Viande kefta, frite, salade, sauces au choix, canette au choix',
            },
            {
              name: 'Poulet',
              price: '5.50€',
              img: 'assets/dish/frite.svg',
              composition:
                'Viande poulet, frite, salade, sauces au choix, canette au choix',
            },
          ],
        },
        {
          name: 'TACOS',
          items: [
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
      ],
    };
  }
}
