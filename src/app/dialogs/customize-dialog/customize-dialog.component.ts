import {Component, Inject, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface InputCounterOptions {
  min: number;
  max: number;
  step: number;
  label?: string;
  placeholder?: string;
}

@Component({
  selector: 'app-customize-dialog',
  templateUrl: './customize-dialog.component.html',
  styleUrls: ['./customize-dialog.component.scss']
})
export class CustomizeDialogComponent implements OnInit {

  customizeFG: UntypedFormGroup;

  constructor(public dialogRef: MatDialogRef<CustomizeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: InputCounterOptions) {
  }

  ngOnInit(): void {
    this.customizeFG = new UntypedFormGroup({
      min: new UntypedFormControl(this.data.min),
      max: new UntypedFormControl(this.data.max),
      step: new UntypedFormControl(this.data.step),
      label: new UntypedFormControl(this.data.label),
      placeholder: new UntypedFormControl(this.data.placeholder),
    });
  }

  save() {
    this.dialogRef.close(this.customizeFG.getRawValue() as InputCounterOptions);
  }

}
