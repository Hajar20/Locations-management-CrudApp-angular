import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{

  location = new FormGroup({
    id : new FormControl(''),
    name : new FormControl(''),
    city :new FormControl(''),
    state :new FormControl('Choose a state ...'),
    photo : new FormControl(''),
    availableUnits : new FormControl(''),
    wifi : new FormControl('False'),
    laundry : new FormControl('False')
  })
  alert : boolean = false
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
collectData(): void{
  //console.warn(this.location.value)
  this.app.saveLocation(this.location.value).subscribe((e:any) =>{
    //console.warn("The location :",e)
    this.alert=true
    this.location.reset({})
  })
}
closeAlert(){
   this.alert=false
}
}
