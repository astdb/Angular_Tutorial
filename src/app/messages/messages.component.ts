import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService needs to be public in order to be bound to in the template. Angular binds only to _public_ component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    
  }

}
