import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'select-time',
  templateUrl: './select-time.component.html',
  styleUrls: ['./select-time.component.css']
})
export class SelectTimeComponent {
  @Input() show!: boolean

  @Output() sentData = new EventEmitter()
  @Output() canceling = new EventEmitter()

  removeKeyDownEvent!: any
  focusedElement!: any
  value: any = ''
  active = true
  noActive = false
  time: any = {
    'hours': '00',
    'minutes': '00',
    'period': 'AM'
  }

  constructor(private renderer: Renderer2) { }

  onClick(e: any) {
    e.target.focus()
    e.target.textContent = ''
    this.focusedElement = e.target
    this.removeKeyDownEvent = this.renderer.listen(e.target, 'keydown', this.onKeyDown.bind(this))
  }

  onKeyDown(e: any) {
    if (isNaN(e.key)) {
      return
    }
    e.preventDefault()

    this.value += e.key
    if (this.value.length > 2) {
      this.value = this.value[2]
    }
    this.value = this.valdiate(this.value)
    this.focusedElement.textContent = this.value.toString().padStart(2, '0')
  }

  onBlur(e: any) {
    if (!e.target.textContent) {
      e.target.textContent = '00'
    }
    this.time[e.target.id] = this.value.toString().padStart(2, '0')
    this.removeKeyDownEvent()
    this.value = ''
  }

  sentTime() {
    this.sentData.emit(this.time)
  }
  
  cancel() {
    this.canceling.emit()
  }
  
  doActive(e: any) {
    this.active = !this.active
    this.noActive = !this.noActive
    this.time.period = e.target.textContent
  }

  valdiate(value: number): number {
    if (this.focusedElement.id == 'hours') {
      value = this.range(0, 12, value)
    }
    if (this.focusedElement.id == 'minutes') {
      value = this.range(0, 59, value)
    }
    return value
  }

  range(min: number, max: number, value: number): number {
    if (value < min) {
      value = min
    }
    if (value > max) {
      value = max
    }
    return value
  }
}
