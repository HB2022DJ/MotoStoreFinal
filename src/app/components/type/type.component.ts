import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  motos ?: Moto[];
  constructor(private activatedRoute: ActivatedRoute, private motoService: MotoService, private typeService: TypeService) { }

  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get('type');
    this.motoService.getAll().subscribe(data => {
      this.motos = data.filter(motos => motos.type == type);

        console.log(this.motos);});
   
  }

}
