import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CustomizeDialogComponent, InputCounterOptions} from './dialogs/customize-dialog/customize-dialog.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;

  title = 'input-counter';
  options: InputCounterOptions = {min: 0, max: 10, step: 1};

  constructor(private dialog: MatDialog) {
  }

  openCustomizeDialog() {
    this.dialog.open(CustomizeDialogComponent, {data: this.options}).afterClosed().subscribe(data => {
      if (data) {
        this.options = Object.assign(this.options, data);
      }
    });
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      inputCounter: new FormControl()
    });

    this.formGroup.get('inputCounter').valueChanges.subscribe(value => console.log('inout counter value: ', value));
  }

}
