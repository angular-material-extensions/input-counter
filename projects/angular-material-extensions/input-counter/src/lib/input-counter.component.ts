import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

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
  value: number;

  @Input()
  max: number;

  @Input()
  min: number;

  @Input()
  step: number;

  @Input()
  placeholder: string;

  @Input()
  label: string;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  propagateChange = (_: any) => {
  };

  ngOnInit(): void {
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
