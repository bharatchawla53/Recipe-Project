import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isToggled : boolean = false; 
  isDismiss : boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }

  onToggleClick() {
    this.isToggled = true; 
  }

  onDismiss() {
    this.isToggled = false; 
  }


}
