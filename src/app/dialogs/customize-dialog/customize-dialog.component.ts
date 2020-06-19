import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

  customizeFG: FormGroup;

  constructor(public dialogRef: MatDialogRef<CustomizeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: InputCounterOptions) {
  }

  ngOnInit(): void {
    this.customizeFG = new FormGroup({
      min: new FormControl(this.data.min),
      max: new FormControl(this.data.max),
      step: new FormControl(this.data.step),
      label: new FormControl(this.data.label),
      placeholder: new FormControl(this.data.placeholder),
    });
  }

  save() {
    this.dialogRef.close(this.customizeFG.getRawValue() as InputCounterOptions);
  }

}
