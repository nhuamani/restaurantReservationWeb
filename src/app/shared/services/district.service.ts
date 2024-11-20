import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DistrictResponse } from "../models/response/district-response.model";


@Injectable({
    providedIn: 'root'
})
export class DistrictService {

    private baseUrl:string = `${environment.HOST}/districts`;
    private htttp = inject(HttpClient);

    getAllDistricts(): Observable<DistrictResponse[]> {
        return this.htttp.get<DistrictResponse[]>(this.baseUrl);
    }
}