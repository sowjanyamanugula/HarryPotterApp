import { HarryPotter } from './../../model/model';
import { HarryPotterserviceService } from './../shared/harry-potterservice.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';




@Component({
  selector: 'app-harry-potter-list',
  templateUrl: './harry-potter-list.component.html',
  styleUrls: ['./harry-potter-list.component.css']
})
export class HarryPotterListComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['name', 'actor', 'house'];
  dataSource!: MatTableDataSource<HarryPotter[]>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


   //HarryPotterData: HarryPotter[]=[];
   //HarryPotterData: HarryPotter[]=[];
  HarryPotterData!: MatTableDataSource<HarryPotter>;
  
  
  constructor(private hs:HarryPotterserviceService,private router:Router) { }

  ngOnInit(): void {
    this.hs.getAllCharacters().subscribe(res=>{
      console.log(res);
      
      
      //this.HarryPotterData= res;
      this.HarryPotterData=new MatTableDataSource(res);
      //setTimeout(() => this.HarryPotterData.paginator = this.paginator);
      //this.HarryPotterData.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.HarryPotterData.paginator = this.paginator
    
  }

  navigatetoDetailsPage(rowdata:any){
    console.log(rowdata);
    
    
    
    this.router.navigate(['detail/', rowdata.actor]);
  }

}
