import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SpeedOmeterService } from '../speed-ometer/speed-ometer.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeedOmeterModel } from '../speed-ometer/speed-ometer.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-feeder',
  imports: [JsonPipe],
  templateUrl: './feeder.component.html',
  styleUrl: './feeder.component.scss',
})
export class FeederComponent implements OnInit, OnDestroy{
  s$:any;

  private activatedRoute = inject(ActivatedRoute);

  data: SpeedOmeterModel={value:0, unit:""};

  public constructor(private speedOmeterService: SpeedOmeterService){

  }

  ngOnInit(): void {
    let value = this.activatedRoute.snapshot.queryParams["value"];
    let unit = this.activatedRoute.snapshot.queryParams["unit"];

    this.data = {value, unit};

    this.s$=this.speedOmeterService.updateData({value,unit}).subscribe((x: any)=>{console.log("Sent data",x);})
  }

  ngOnDestroy(): void {
    this.s$.unsubscribe();
  }
}
