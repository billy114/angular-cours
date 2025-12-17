import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../core/services/api/product.service';
import {Product} from '../../core/models/product.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  product! : Product ;
  message : string = "";

  constructor(
    private route : ActivatedRoute,
    private productService : ProductService
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {

      const id = +params['id'];
      this.productService.getProductById(id).subscribe({
        next: (data : Product) => {
          this.product = data;
        },
        error: err => {
          this.message = JSON.stringify(err.error.message);
        }
      })
    })


  }

}
