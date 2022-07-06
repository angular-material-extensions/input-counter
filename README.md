<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://raw.githubusercontent.com/angular-material-extensions/input-counter/HEAD/assets/angular-material-extensions-logo.svg">
</p>

# @angular-material-extensions/input-counter - Autocomplete input component for google-maps built with angular material design

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Finput-counter.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Finput-counter)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/input-counter)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/input-counter/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/input-counter?branch=master)
[![Build Status](https://travis-ci.org/angular-material-extensions/input-counter.svg?branch=master)](https://travis-ci.org/angular-material-extensions/input-counter)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/input-counter/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/input-counter)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/input-counter.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/input-counter.svg?style=flat-square)](https://github.com/angular-material-extensions/input-counter/blob/master/LICENSE)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/gdi2290/awesome-angular)


<p align="center">
  <img alt="@angular-material-extensions/input-counter" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/input-counter/HEAD/assets/v1/ex1.gif">
</p>


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/google-maps-auto/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/input-counter)

View all the directives and components in action at [https://angular-material-extensions.github.io/input-counter](https://angular-material-extensions.github.io/input-counter)

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular


<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/input-counter/getting-started)

## 1. Install via *npm*. 

Now install `@angular-material-extensions/input-counter` via:
```shell
npm install --save @angular-material-extensions/input-counter
```

<a name="peerDependencies"/>

### Requirements (peer dependencies):

for the ui input component, please consider to install the following packages
- [angular animations v14.x](https://www.npmjs.com/package/@angular/animations)
- [angular forms v14.x](https://www.npmjs.com/package/@angular/forms)
- [angular material v14.x](https://www.npmjs.com/package/@angular/material)
- [angular cdk v14.x](https://www.npmjs.com/package/@angular/cdk)

```bash
npm i @angular/cdk @angular/material @angular/animations @angular/forms 
```

<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

----

##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/input-counter`:
```js
{
  '@angular-material-extensions/input-counter';: 'node_modules/@angular-material-extensions/input-counter/bundles/input-counter.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatInputCounterModule } from '@angular-material-extensions/input-counter';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatInputCounterModule.forRoot()`):
```js
import { MatInputCounterModule } from '@angular-material-extensions/input-counter';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [
     MatInputCounterModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatInputCounterModule `:

```js
import { MatInputCounterModule } from '@angular-material-extensions/input-counter';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [
     MatInputCounterModule, ...], 
})
export class OtherModule {
}
```

<a name="usage"/>

## [Usage](https://angular-material-extensions.github.io/input-counter/getting-started)


### `mat-input-counter` 


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


<p align="center">
  <img alt="@angular-material-extensions/input-counter" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/input-counter/HEAD/assets/v1/ex1.png">
</p>

<p align="center">
  <img alt="@angular-material-extensions/input-counter" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/input-counter/HEAD/assets/v1/ex2.png">
</p>


<a name="api"/>

### API - for more info please visit the official documentation [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/places-autocomplete?hl=en)

### `matGoogleMapsAutocomplete`
| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| value               | `Input()`   |  `number` ;      | - |  the value of the component (number)
| min                 | `Input()`   |  `number` ;      | - |  The minimum value that the counter can have.
| max                 | `Input()`   | `number`;        | - | The maximum value that the counter can have.  
| step                | `Input()`   | `number`         | - | The values at which the thumb will snap.
| label               | `Input()`   | `string`         | - |  Label of the form field 
| placeholder         | `Input()`   | `string`         | - |  Placeholder of the form field
| change              | `Output()`  | `number`| - |  event when the input form value changed




<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/input-counter/doc/index.html)

Please checkout the full documentation [here](https://angular-material-extensions.github.io//input-counter/doc/index.html) 



<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/input-counter.git)
2. Install the dependencies by running `npm i`
3. go to lib directory under `projects/angular-material-extensions/input-counter`
4. build the library `npm run build`


<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/input-counter/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:


## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

