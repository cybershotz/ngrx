import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { AppState } from './reducers'; 
import { Logout } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {


    }

    logout() {
      this.store.dispatch(new Logout())
    }

    /* 
      ng config cli.defaultCollection @ngrx/schematics
      ng g store AppState --root --module app.module.ts
      ng g action auth/Auth
      ng g reducer Auth --flat=false --module auth/auth.module.ts
    */

}
