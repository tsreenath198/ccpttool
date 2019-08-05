import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public consultantId:number;
  public clientApplicationId:number;
  public clientPositionId:number;
}