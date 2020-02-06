import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



    constructor() {

    }

    ngOnInit() {


    }

    logout() {
    }

    /* 
      ng config cli.defaultCollection @ngrx/schematics
      ng g store AppState --root --module app.module.ts
      ng g action auth/Auth
    */


}
