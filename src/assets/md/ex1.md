```html
 <mat-input-counter [min]="1"
                    [max]="10"
                    [step]="0.5"
                    [label]="Your label"
                    placeholder="your place holder">
        </mat-input-counter>
```

#### With Reactive forms

```html
      <form [formGroup]="formGroup">
        <mat-input-counter formControlName="inputCounter"
                           [min]="+options.min"
                           [max]="+options.max"
                           [step]="+options.step"
                           [label]="options.label"
                           [placeholder]="options.placeholder">
        </mat-input-counter>
      </form>
```

```typescript

formGroup: FormGroup;

 this.formGroup = new FormGroup({
      inputCounter: new FormControl()
    });
```
