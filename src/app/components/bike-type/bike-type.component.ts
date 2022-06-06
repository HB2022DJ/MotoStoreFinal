import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-bike-type',
  templateUrl: './bike-type.component.html',
  styleUrls: ['./bike-type.component.css']
})
export class BikeTypeComponent implements OnInit {
  motos?: Moto[];
types: string[] = this.typeService.types

  constructor(private motoService: MotoService,private activatedRoute:ActivatedRoute,private typeService: TypeService) { }

  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get('type');
    this.motoService.getAll().subscribe(data => {
      this.motos = data.filter(motos => motos.type == type);

        console.log(this.motos);});
  }

}
