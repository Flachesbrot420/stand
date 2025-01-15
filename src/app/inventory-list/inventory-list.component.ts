import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory.service'; // Angepasster Pfad
import { InventoryItem } from '../inventory-item/inventory-item'; // Angepasster Pfad

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  inventoryItems: InventoryItem[] = [];
  displayedColumns: string[] = ['id', 'name', 'quantity', 'unit'];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventoryItems().subscribe(items => {
      this.inventoryItems = items;
    });
  }
}
