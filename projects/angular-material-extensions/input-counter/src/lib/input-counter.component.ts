import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatFormFieldAppearance} from '@angular/material/form-field';

@Component({
  selector: 'mat-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCounterComponent),
      multi: true
    }
  ]
})
export class InputCounterComponent implements OnInit, ControlValueAccessor {

  @Input()
  _value: number;

  @Input()
  max: number;

  @Input()
  min: number;

  @Input()
  step = 1;

  @Input()
  appearance: MatFormFieldAppearance = 'standard';

  @Input()
  placeholder: string;

  @Input()
  label = 'Number';

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  propagateChange = (_: any) => {
  };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(this._value);
  }

  ngOnInit(): void {
  }

  increment() {
    console.log('incr', this.value);
    if (!this.value) {
      this.value = 0;
    }
    this.value += this.step;
  }

  decrement() {
    if (!this.value) {
      this.value = 0;
    }
    this.value -= this.step;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
