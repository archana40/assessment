import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  items: any = []

  searchText;


  prodDetails = {
    _id: '',
    prodName: '',
    category: '',
    company: '',
    quantity: '',
    price: ''
  }


  constructor(private pservice: ProductService) {
    this.getProdDetails();
  }


  getProdDetails() {
    this.pservice.getProductData().subscribe(res => {
      this.items = res;
    }, err => {
      console.log(err);
    }, () => {
      console.log("Product Details got successfully");
    })
  }


  sendProduct(data) {
    this.prodDetails = data;
    console.log(this.prodDetails)
  }


  updateProducts(details) {
    this.pservice.updateProductDetails(details).subscribe(updatedProducts => {
      console.log(updatedProducts);
      this.getProdDetails();
    }, err => {
      console.log(err);
    }, () => {
      console.log("Updated Products successfully");
    })
  }

  deleteProductDetails(id) {
    this.pservice.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getProdDetails();
    }, err => {
      console.log(err);
    }, () => {
      console.log("product deleted success");
    });

  }




  ngOnInit() {
  }































  // deleteClient(id){
  //   return this.http.delete(`${this.backendurl}/deleteClients/${id}`)
  // }





}
