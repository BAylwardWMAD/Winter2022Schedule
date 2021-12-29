import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent implements OnInit {

  dateNow = Date.now();

  constructor() { }

  ngOnInit(): void {
    this.setCurrentTime();
  }

  setCurrentTime(): void {
    setInterval(() => {
      this.dateNow = Date.now();
    }, 1000);
  }
}
