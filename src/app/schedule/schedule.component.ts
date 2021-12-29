import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


}
