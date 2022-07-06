import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CustomizeDialogComponent, InputCounterOptions} from './dialogs/customize-dialog/customize-dialog.component';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: UntypedFormGroup;

  title = 'input-counter';
  options: InputCounterOptions = {min: 0, max: 10, step: 1};

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private dialog: MatDialog) {
    angulartics2GoogleAnalytics.startTracking();
  }

  openCustomizeDialog() {
    this.dialog.open(CustomizeDialogComponent, {data: this.options}).afterClosed().subscribe(data => {
      if (data) {
        this.options = Object.assign(this.options, data);
      }
    });
  }

  ngOnInit(): void {
    this.formGroup = new UntypedFormGroup({
      inputCounter: new UntypedFormControl()
    });

    this.formGroup.get('inputCounter').valueChanges.subscribe(value => console.log('inout counter value: ', value));
  }

}
