import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getReviews(restaurant) {
    return this.http.get(`${environment.BASE_URL}/reviews?restaurant=${restaurant}`)
  }

  addReview(body) {
    return this.http.post(`${environment.BASE_URL}/reviews/add`, body, {
      headers: environment.loaclStorageHeader()
    })
  }

}