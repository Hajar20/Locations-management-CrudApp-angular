import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private router : ActivatedRoute,private app: AppService) {
  }
  locationDetails: any = {};
  ngOnInit():void {
    this.getLocationDetails(this.router.snapshot.params['id'])
  }
  getLocationDetails(id:number): void {
    this.app.getLocation(id).subscribe((res) => {
      this.locationDetails = res;
    });
  }
}
