import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{
  constructor(private app : AppService) {
  }
  collection:any=[];
  //a lifecycle hook in Angular that is called after the constructor is called and after the component's inputs have been initialized.
  ngOnInit(): void {
    this.fetchLocationList()
  }
  fetchLocationList(): void {
    this.app.getList().subscribe((res) => {
      this.collection = res;
    });
  }
  removeLocation(id:number){
    this.app.removeLocation(id).subscribe((r)=>{
      this.fetchLocationList()
    })

  }

}
