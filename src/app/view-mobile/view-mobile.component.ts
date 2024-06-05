import { Component, OnInit } from '@angular/core';
import { MobatoService } from '../mobato.service';

@Component({
  selector: 'app-view-mobile',
  standalone: true,
  imports: [],
  templateUrl: './view-mobile.component.html',
  styleUrl: './view-mobile.component.css'
})
export class ViewMobileComponent implements OnInit{
  mobileList:any = [];
  constructor(private mobileService: MobatoService){}
  ngOnInit(): void {
    this.mobileService.getMobile().subscribe((data)=>{
      this.mobileList = data;
    })
  }

}
