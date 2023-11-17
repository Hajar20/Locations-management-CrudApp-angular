import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
 constructor(private app : AppService) {
 }
   stateCodes:any[] = [];
 ngOnInit() {
   this.stateCodes = [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
     "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
     "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
     "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
     "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
 }

}
