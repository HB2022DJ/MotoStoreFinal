import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-bike-phares',
  templateUrl: './bike-phares.component.html',
  styleUrls: ['./bike-phares.component.css']
})
export class BikePharesComponent implements OnInit {
  motos?: Moto[];
  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getAll().subscribe( data => {
      this.motos = data.filter(data => data.venteFlash === true);
        console.log(this.motos);   
      });
  }

}
