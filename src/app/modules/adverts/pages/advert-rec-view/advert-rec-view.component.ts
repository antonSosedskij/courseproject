import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertInfoDto } from 'src/app/core/interfaces/advert-info';
import { AdvertService } from 'src/app/core/services/advert/advert.service';


@Component({
  selector: 'app-advert-rec-view',
  templateUrl: './advert-rec-view.component.html',
  styleUrls: ['./advert-rec-view.component.scss']
})
export class AdvertRecViewComponent implements OnInit {

  advertId!: number;
  advert!: AdvertInfoDto;

  constructor(private advertService: AdvertService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.advertId = this.route.snapshot.params['id']
    this.advertService.getById(this.advertId).subscribe(data => {
      this.advert = data;
      console.log(this.advert);
    })
  }
}
