import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginatedResponse } from "../models/response/paginated-response.model";
import { RestaurantResponse } from "../models/response/restaurant-response.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseURL:string = `${environment.HOST}/restaurants`;
  private http = inject(HttpClient);

  getAllRestaurants(page: number, size: number): Observable<PaginatedResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
    return this.http.get<PaginatedResponse>(`${this.baseURL}/page`, { params });
  }

  searchRestaurants(name: string, address: string, page: number, size: number): Observable<PaginatedResponse> {
    const params = new HttpParams()
      .set('name', name)
      .set('address', address)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse>(`${this.baseURL}/page/search`, { params });
  }

  findByDistrictName(districtName: string, page: number, size: number): Observable<PaginatedResponse> {
    const params = new HttpParams()
        .set('districtName', districtName)
        .set('page', page.toString())
        .set('size', size.toString());
    return this.http.get<PaginatedResponse>(`${this.baseURL}/page/district`, { params });
  }

  getRestaurantById(id: number): Observable<RestaurantResponse> {
    return this.http.get<RestaurantResponse>(`${this.baseURL}/${id}`);
  }
}
