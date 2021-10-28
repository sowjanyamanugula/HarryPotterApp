import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
 actor:any;
  constructor(private router:Router, private route:ActivatedRoute) { }
 

  ngOnInit(): void {
     this.actor=this.route.snapshot.paramMap.get('actor');
    console.log(this.actor);
    
    
  }

  onBack(): void {
    this.router.navigate(['']);
  }

}
