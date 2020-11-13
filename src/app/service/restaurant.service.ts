import { Injectable } from '@angular/core';
import { Address } from '../model/address';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor() {}

  getAddress(): Address {
    return {
      name: 'Sucré Salé',
      street: '8 pl 3 Rois',
      zip: '60180',
      city: 'NOGENT SUR OISE',
      phone: '+33344530517',
    };
  }

  getAdminLinks(): Link[] {
    return [
      { name: 'CGU', href: '/cgu' },
      { name: 'CGV', href: '/cgv' },
    ];
  }

  getSocialLinks(): Link[] {
    return [
      { name: 'Facebook', href: '/facebook' },
      { name: 'Twitter', href: '/twitter' },
      { name: 'SnapChat', href: '/snapChat' },
    ];
  }
}
