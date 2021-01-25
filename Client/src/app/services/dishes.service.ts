import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dish } from '../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private http: HttpClient) { }

  dishes: Dish[] = []

  getSignatureDishes() {
    return this.http.get(`${environment.BASE_URL}/dishes/signature`)
  }

  deleteDish(_id) {
    return this.http.request('delete', `${environment.BASE_URL}/admin/dish/delete`, {
      headers: { 'Authorization': localStorage.access_token },
      body: { _id }
    })
  }

  addDish(body) {
    return this.http.post(`${environment.BASE_URL}/admin/dish/add`, body, {
      headers: { 'Authorization': localStorage.access_token },
    })
  }
  editDish(body) {
    return this.http.put(`${environment.BASE_URL}/admin/dish/edit`, body, {
      headers: { 'Authorization': localStorage.access_token },
    })
  }

}
