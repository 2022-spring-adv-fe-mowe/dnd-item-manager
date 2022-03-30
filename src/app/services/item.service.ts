import { Injectable } from '@angular/core';
import { Item } from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    new Item(1, 'Longsowrd', 'does d8 + strenght mod damage', 12)
  ];

  constructor() { }

  getItems(): Item[] {
    return this.items
  }
}
