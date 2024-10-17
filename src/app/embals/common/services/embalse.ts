import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Embalse } from "../model/embalse";
import { AUTH } from "../../properties/auth";
import { Observable, map, retry } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class EmbalseService {
    constructor(private readonly httpClient: HttpClient) { }

    getEmbalseByRadius(lat: number, lon: number, radius: number): Observable<Embalse[]> {
        const options = {
            headers: new HttpHeaders({
                Authorization: "Bearer " + AUTH.TOKEN,
            }),
        };

        return this.httpClient.get<Embalse[]>(`localhost:5000/obtener-embalse/${lat}/${lon}/${radius}`, options).pipe(
            map((dataCollection) => {
                let embalses: Embalse[] = new Array<Embalse>();
                dataCollection.forEach((data) => {
                    embalses.push(new Embalse(data));
                });

                return embalses;
            }),
            retry(1)
        );
    }
}
