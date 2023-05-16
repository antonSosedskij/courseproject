import { Component, OnInit } from '@angular/core';
import { AdvertShortInfoDto } from 'src/app/core/interfaces/advert-short-info';
import { AdvertService } from 'src/app/core/services/advert/advert.service';

@Component({
  selector: 'app-adverts-rec',
  templateUrl: './adverts-rec.component.html',
  styleUrls: ['./adverts-rec.component.scss']
})
export class AdvertsRecComponent implements OnInit{

  adverts!: AdvertShortInfoDto[];

  isLoading: boolean = true;

  constructor(private advertService: AdvertService) {}

  ngOnInit(){
    this.advertService.getAdverts().subscribe(data => {
      this.adverts = data;
      this.isLoading = false;
    });
  }
}
