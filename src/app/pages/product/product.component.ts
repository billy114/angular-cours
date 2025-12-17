import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../core/services/api/product.service';
import {Product} from '../../core/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  product! : Product ;

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
        }
      })
    })


  }

}
