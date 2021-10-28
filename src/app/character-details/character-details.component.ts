import { HarryPotterserviceService } from './../shared/harry-potterservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
 actor:any;
 house:any;
 name:any;
 img:string='';
 alive!: string;
 ancestry:string='';
 dateOfBirth:string='';
 eyeColour:string='';
 gender:string='';
 hairColour:string='';
 hogwartsStaff!:string;
 hogwartsStudent!:string;
 patronus:string='';
 yearOfBirth:number=1;
 wizard!:string;
 species:string='';
 

  constructor(private router:Router, private route:ActivatedRoute,private hs:HarryPotterserviceService) { }
 

  ngOnInit(): void {
     this.name=this.route.snapshot.paramMap.get('name');
    console.log(this.name);
    this.house=this.route.snapshot.paramMap.get('house');
    console.log(this.house);
    if(this.house!== null && this.house !== undefined && this.house !== ""){
      this.hs.getHouseCharacters(this.house).subscribe(res=>{
      console.log(res);
      res.forEach(character=>{
        if(this.name == character.name){
           this.actor = character.actor;
          // this.alive=character.alive;
           this.alive= (character.alive==true? 'Yes' : 'No');
           this.ancestry = character.ancestry
           this.dateOfBirth=character.dateOfBirth;
           this.eyeColour=character.eyeColour;
           this.hairColour=character.hairColour;
           //this.hogwartsStaff=character.hogwartsStaff;
           this.hogwartsStaff = character.hogwartsStaff == true ? 'Yes' : 'No';
           //this.hogwartsStudent=character.hogwartsStudent;
           this.hogwartsStudent = character.hogwartsStudent == true ? 'Yes' : 'No';
           this.patronus=character.patronus;
           this.img=character.image;
           this.gender=character.gender;
           this.species=character.species;
           //this.wizard=character.wizard;
           this.wizard = character.wizard == true ? 'Yes' : 'No';
           this.yearOfBirth=character.yearOfBirth;
        }
      })
      
    })}
    else{
      this.hs.getAllCharacters().subscribe(res=>{
        res.forEach(character =>{
          if(this.name == character.name){
            this.actor = character.actor;
          // this.alive=character.alive;
           this.alive= character.alive ==true ? 'Yes' : 'No';
           this.ancestry = character.ancestry
           this.dateOfBirth=character.dateOfBirth;
           this.eyeColour=character.eyeColour;
           this.hairColour=character.hairColour;
          // this.hogwartsStaff=character.hogwartsStaff;
          this.hogwartsStaff = character.hogwartsStaff == true ? 'Yes' : 'No';
         //  this.hogwartsStudent=character.hogwartsStudent;
         this.hogwartsStudent = character.hogwartsStudent == true ? 'Yes' : 'No';
           this.patronus=character.patronus;
           this.img=character.image;
           this.gender=character.gender;
           this.species=character.species;
           //this.wizard=character.wizard;
           this.wizard = character.wizard == true ? 'Yes' : 'No';
           this.yearOfBirth=character.yearOfBirth;
          }
        })
      })
    }
    
   
  }

  onBack(): void {
    this.router.navigate(['']);
  }



}
