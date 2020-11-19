import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/domain/models/address';
import { Link } from 'src/domain/models/link';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() links: Link[];
  @Input() address: Address;
  @Input() adminLinks: Link[];
  @Input() socialLinks: Link[];

  constructor() {}

  ngOnInit(): void {}
}
