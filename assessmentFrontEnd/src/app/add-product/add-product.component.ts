import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addedData: any = [];

  constructor(private service: ProductService, private router: Router) { }

  postForm(form: NgForm) {
    console.log(form.value, '=============');
    this.service.postData(form.value).subscribe((response) => {
      console.log(response);
      this.addedData = response;
      this.router.navigate(['./details']);

    }, (err) => {
      console.log(err);
    }, () => {
      console.log("data sent successfully");
    })
  }
  ngOnInit() {
  }

}






































