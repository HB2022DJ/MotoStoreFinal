import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from 'src/app/models/moto';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  moto ?: Moto;
 
  constructor(private motoService:MotoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.motoService.getOneMoto(id).subscribe( data => {
      this.moto = data;
    });
  }

}
