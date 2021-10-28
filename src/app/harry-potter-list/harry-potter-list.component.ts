import { HarryPotter } from './../../model/model';
import { HarryPotterserviceService } from './../shared/harry-potterservice.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';

interface House {
  value: string;
  viewValue: string;
}
interface Food {
  value: string;
  viewValue: string;
}

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
  houses: House[] = [
    {value: 'gryffindor', viewValue: 'gryffindor'},
    {value: 'Slytherin', viewValue: 'Slytherin'},
    {value: 'Hufflepuff', viewValue: 'Hufflepuff'},
    {value:'Ravenclaw',viewValue:'Ravenclaw'}
  ];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
 
 selectedValue='All Houses';
  
  HarryPotterData!: MatTableDataSource<HarryPotter>;
  
  housesArr: string[]=[];
  Arrofhouses:Object[]=[];
  housesofarr:object[]=[];
  houseObj={};
  
  newhousesobj:Array<{ value:string,viewValue:string }> = []
  constructor(private hs:HarryPotterserviceService,private router:Router) { }

  ngOnInit(): void {
    this.hs.getAllCharacters().subscribe(res=>{
      this.HarryPotterData=new MatTableDataSource(res);
      this.HarryPotterData.paginator = this.paginator
      res.forEach(character => {
        this.housesArr.indexOf(character.house) === -1 ? this.housesArr.push(character.house) : '';
       });
    
       this.housesArr.forEach(val =>{
         if(val==""||val==null){
          val ="All Houses"
         }
        var houseObj={value:'',viewValue:''};
         houseObj.value=val;
         houseObj.viewValue=val;
         this.newhousesobj.push(houseObj);
        })
    })
  }

  ngAfterViewInit() {
    this.HarryPotterData.paginator = this.paginator
    
  }

  navigatetoDetailsPage(rowdata:any){
    this.router.navigate(['detail/', rowdata.name,rowdata.house]);
   // this.router.navigate(['detail/', {my_object: JSON.stringify(rowdata)}]); 
   //this.router.navigate(['detail'], { state:{ 'data':rowdata } });
  }

  filterByHouse(selectedValue:string){
    if(selectedValue == 'All Houses'){
      this.hs.getAllCharacters().subscribe(res=>{
        this.HarryPotterData=new MatTableDataSource(res);
      this.HarryPotterData.paginator = this.paginator
      })
    }
    this.hs.getHouseCharacters(selectedValue).subscribe(resp=>{
      this.HarryPotterData=new MatTableDataSource(resp);
      this.HarryPotterData.paginator = this.paginator
    })
  }
}
