import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public  main=
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
    ];

  public  faults=[{name:'רשימת תקלות',updated:'טבלת התקלות'},{name:'תקלות שנמחקו',updated:' '},{name:'תקלה חדשה',updated:' '}];

  public  admin=[{name:'מקבלי SMS',updated:'טבלת מקבלי SMS'},{name:'הרשאות גישה',updated:''},{name:'דוחות להנהלה',updated:''},{name:'הגדרות',updated:'למשל threshold לזמינות המעכות'}];

}
