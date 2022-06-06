import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
 types = ["Custom", "Roadster", "Sportive", "Enduro"];
  constructor() { }
}
