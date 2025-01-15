import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItem } from '../inventory-item/inventory-item'; // Korrekten Pfad verwenden

@Injectable({
  providedIn: 'root'
})
export class InventoryService { // Stelle sicher, dass die Klasse exportiert wird

  private apiUrl = 'http://localhost:8080/api/inventory';

  constructor(private http: HttpClient) { }

  getInventoryItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiUrl);
  }
}
