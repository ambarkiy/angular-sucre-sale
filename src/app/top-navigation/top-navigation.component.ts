import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../model/address';
import { Link } from '../model/link';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent implements OnInit {
  @Input() logo: string;
  @Input() address: Address;
  @Input() links : Link[];
  
  constructor() {}

  ngOnInit(): void {}
}
