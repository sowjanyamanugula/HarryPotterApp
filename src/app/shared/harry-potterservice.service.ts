import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HarryPotter } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterserviceService {
  api="http://hp-api.herokuapp.com/api/characters";

  constructor(private Http:HttpClient) { }

  getAllCharacters():Observable<HarryPotter[]>{
    return this.Http.get<HarryPotter[]>(this.api);
  }

  public getHouse() {
    return this.Http.get(`${this.api}/house/slytherin`);
   
   }
}
