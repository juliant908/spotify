import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent implements OnInit{
  currentTime = new Date()
  currentHour = this.currentTime.getHours()

  greeting = ""

  ngOnInit(): void {
    if (this.currentHour < 12) {
      this.greeting = "Buenos días"
    } else if (this.currentHour < 18) {
      this.greeting = "Buenas tardes"
    } else {
      this.greeting = "Buenas noches"
    }
  }
}
