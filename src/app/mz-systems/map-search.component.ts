import {Component, OnInit, Input} from '@angular/core';
import {importType} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-map-search',
  template: `
 <div id="omnibox">
 <div id="searchbox">
          <button md-icon-button  (click)="rightmenu.toggle()">
            <md-icon class="md-24">menu</md-icon> 
          </button>
            <md-input-container style="width:224px;">
                <input type="search" md-input placeholder="הקלד ערך לחיפוש" >
            </md-input-container>

         <button md-icon-button    >
            <md-icon class="md-24" >search</md-icon>
          </button>
          <button md-icon-button    >
            <md-icon class="md-24" >assistant</md-icon>
          </button>
          </div>
          
</div>
  `,
  styles: [
    `
    #searchbox::after {
        content: "";
        position: absolute;
        right: 315px;
        top: 10px;
        border-left: 1px solid #4e906b;
        height: 28px;
      }
      #searchbox{
        display: block;
        width:372px;
        height:48px;
        border-radius: 2px 2px 0 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02);
        background: #fff;
        box-sizing: border-box;
      }
      #omnibox{
        position: absolute;
        right:0;
        top:70px;
        margin:8px 8px 8px 0;
        height:48px;
        width:392px;
        display:block;
    
        }`
  ]
})
export class MapSearchComponent implements OnInit {

  constructor() { }

  @Input()
  public rightmenu:any  ;
  ngOnInit() {
  }

}
