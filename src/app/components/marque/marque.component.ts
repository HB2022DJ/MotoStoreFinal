import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MarqueService } from 'src/app/services/marque.service';
import { MotoService } from 'src/app/services/moto.service';


@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  motos?: Moto[];


  constructor(private activeRoute: ActivatedRoute,private motoService: MotoService, private MarqueService: MarqueService) { }

  ngOnInit(): void {
    let marque = this.activeRoute.snapshot.paramMap.get('marque');
    this.motoService.getAll().subscribe(data => {
      this.motos = data.filter(motos => motos.marque == marque);

        });

}}
