import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent  {
time!: string
show = false

onFocus() {
 this.show = true
}

showData({hours, minutes, period}: any) {
  this.time = `${hours}:${minutes} ${period}`
  this.show = false
}

cancel() {
  this.show = false
}

}
