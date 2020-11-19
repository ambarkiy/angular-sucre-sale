import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-phone',
  templateUrl: './contact-phone.component.html',
  styleUrls: ['./contact-phone.component.scss'],
})
export class ContactPhoneComponent implements OnInit {
  @Input() phone: string;
  constructor() {}

  ngOnInit(): void {}
}
