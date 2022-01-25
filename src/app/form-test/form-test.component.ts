import { Component, Directive, ElementRef, HostListener, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { SelectTimeComponent } from '../select-time/select-time.component';

@Directive({
  selector: "input[type=text][ccTimePicker]"
})
export class TimePickerDirective {
  timePicker!: any

  constructor(private ElRef: ElementRef, private viewConrRef: ViewContainerRef) { }

  @HostListener('focus') onFocus() {
    this.timePicker = this.viewConrRef.createComponent(SelectTimeComponent)
    this.timePicker.instance.show = true
    this.timePicker.instance.sentData.subscribe((d: any) => {
      this.ElRef.nativeElement.value = `${d.hours}:${d.minutes} ${d.period}`
      this.timePicker.destroy()
    })
    this.timePicker.instance.canceling.subscribe(() => this.timePicker.destroy())

  }
}
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
