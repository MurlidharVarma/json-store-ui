import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpeedOmeterService } from './speed-ometer.service';
import { interval, mergeMap, pipe, Subscription } from 'rxjs';
import { SpeedOmeterModel } from './speed-ometer.model';

@Component({
  selector: 'app-speed-ometer',
  imports: [],
  templateUrl: './speed-ometer.component.html',
  styleUrl: './speed-ometer.component.scss'
})
export class SpeedOmeterComponent implements OnInit, OnDestroy{

  data: SpeedOmeterModel;
  observableRef$: any;

  public constructor(private service: SpeedOmeterService){
    this.data = {value: 0, unit: "cm/s"};
  }

  ngOnInit(){
    console.log("init")
    this.service.saveData(this.data).subscribe((data: any) =>{
      console.log("initializing pantry ", data)
      this.poll();
    },(err)=>console.error("Error occurred: ",err))
  }

  ngOnDestroy(): void {
    if(this.observableRef$){
      console.log("Unsubscribing");
      this.observableRef$.unsubscribe();
    }
  }

  poll(){
    this.observableRef$ = interval(5000).pipe(mergeMap(x=>this.service.getData()));

    this.observableRef$.subscribe((data: any) =>{
      console.log("polling pantry ", data)
      this.data = data;
    });
  }
}
