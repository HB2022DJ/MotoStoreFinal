import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  marques = ["KTM", "Yamaha", "Harley Davidson", "Kawasaki"];
  constructor() { }
}
