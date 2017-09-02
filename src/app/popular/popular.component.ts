import { Component, OnInit } from '@angular/core';
import { ContactsService } from "app/contacts.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  contacts: any[]=[];
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContactList().slice(0,3)
  }

}
