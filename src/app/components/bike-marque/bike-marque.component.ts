import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MarqueService } from 'src/app/services/marque.service';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-bike-marque',
  templateUrl: './bike-marque.component.html',
  styleUrls: ['./bike-marque.component.css']
})
export class BikeMarqueComponent implements OnInit {
  motos?: Moto[];
  images: string[] = []
  marques: string[] = this.MarqueService.marques;
  constructor(private MarqueService: MarqueService, private motoService: MotoService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let marque = this.activeRoute.snapshot.paramMap.get('marque');
    this.motoService.getAll().subscribe(data => {
      this.motos = data.filter(motos => motos.marque == marque);

        console.log(this.motos);});
  }

}
