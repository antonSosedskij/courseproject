import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AdvertCreateDto } from 'src/app/core/interfaces/advert-create';
import { AdvertInfoDto } from 'src/app/core/interfaces/advert-info';
import { CategoryShortInfoDto } from 'src/app/core/interfaces/category-short-info';
import { AdvertService } from 'src/app/core/services/advert/advert.service';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss']
})
export class CreateAdvertComponent implements OnInit{

  categories!: CategoryShortInfoDto[];

  advertForm = new FormGroup({
    categoryId: new FormControl('', [
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),
  });

  constructor(
    private categoryService: CategoryService,
    private advertService: AdvertService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( data => {
      this.categories = data;
    });
  }

  onSubmit(form: FormGroup){
    let advert: AdvertCreateDto = {
      categoryId: form.value.category_id,
      name: form.value.name,
      description: form.value.description,
      imageUrl: "https://www.allcarz.ru/wp-content/uploads/2012/11/foto-astra-h-sedan_01.jpg",
      price: form.value.price,
      address: form.value.address,
    }
    this.advertService.createAdvert(advert).subscribe(() => {
      console.log(advert);
      
      this.router.navigate(['']);
  });

    
  }

}
