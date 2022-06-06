import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {
motos?: Moto[];
  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getAll().subscribe( data => {
      this.motos = data;
  });
  }

}
