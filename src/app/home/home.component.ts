import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { product } from '../interface/data-Types';
import { ProductService } from '../services/productService';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  imports: [CommonModule, 
    RouterLink,
    NgbCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  popularProducts:undefined|product[];
 trendyProducts:undefined | product[];
  constructor(private product:ProductService) {}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }
}
