import { Component, ViewChild, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogOverviewComponent } from "../dialog-overview/dialog-overview.component";


import * as fromRoot from '../../reducers';
import * as layout from '../../actions/layout';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TdLayoutComponent } from "@covalent/core";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('layout') rightmenu: TdLayoutComponent;
  /*showSidenav$: Observable<boolean>;*/
  that;
  public dialog: MdDialog;

  constructor(private store: Store<fromRoot.State>, dialog: MdDialog) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.that = this;
    this.dialog = dialog;
    //

  }
  ngOnInit() {
    this.store.select(fromRoot.getShowSidenav).subscribe(s => this.rightmenu.sidenav.opened = s)
    this.rightmenu.sidenav.onOpen.subscribe(s => this.openSidenav())
    this.rightmenu.sidenav.onClose.subscribe(s => this.closeSidenav())
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewComponent, {
      height: '600px',
      width: '600px'
    });
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new layout.CloseSidenavAction());

  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());

  }


  routes: Object[] = [{
    title: 'Dashboard',
    route: './dashboard',
    icon: 'dashboard',
  }, {
    title: 'מערכות',
    route: './מפה',
    icon: 'view_quilt',
  }, {
    title: 'תקלות מערכות פתוחות',
    route: '/תקלות',
    icon: 'receipt',
  }, {
    title: 'אירועי אב"מ',
    route: '/אבמ',
    icon: 'people',
  }, {
    title: 'אירועי מוקד בטחון',
    route: '/מוקד',
    icon: 'view_module',
  },
  {
    title: 'רשימת תחקירים',
    route: '/מוקד',
    icon: 'view_module',
  },
  {
    title: 'רשימת AI',
    route: '/מוקד',
    icon: 'view_module',
  }
    ,
  {
    title: 'הרשאות גישה',
    route: '/test',
    icon: 'view_module',
  }
    ,
  {
    title: 'testim',
    route: '/test',
    icon: 'view_module',
  }

  ];


  /* public  main=
     [
       {name:'תמונת מצב',updated:'מבט מסכם',link:['./ראשי']},
       {name:'אירועי אבמ',updated:'',link:['./אבמ'] },
       {name:'תקלות מוקד',updated:'',link:"['./מוקד']"}
     ];
 
   public  sysmenuitems=
     [
       {name:'גרף מערכות',updated:'קשרים בין מערכות',link:['./מפה']} ,
       {name:'מערכת חדשה',updated:''},
       {name:'רשימת תחקירים',updated:''},
       {name:'רשימת AI',updated:''}
     ];*/

  public faults = [{ name: 'רשימת תקלות', updated: 'טבלת התקלות' }, { name: 'תקלות שנמחקו', updated: ' ' }, { name: 'תקלה חדשה', updated: ' ' }];

  public admin = [{ name: 'מקבלי SMS', updated: 'טבלת מקבלי SMS' }, { name: 'הרשאות גישה', updated: '' }, { name: 'דוחות להנהלה', updated: '' }, { name: 'הגדרות', updated: 'למשל threshold לזמינות המעכות' }];

}
