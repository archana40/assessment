import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  backendurl = 'http://localhost:4000';


  constructor(private http: HttpClient) { }

  postData(data) {
    return this.http.post(`${this.backendurl}/addProduct`, data)
  }

  getProductData() {
    return this.http.get(`${this.backendurl}/getProduct`);
  }


  updateProductDetails(data) {
    return this.http.post(`${this.backendurl}/updateData`, data)
  }



  deleteProduct(id) {
    return this.http.delete(`${this.backendurl}/deleteData/${id}`);
  }
}
