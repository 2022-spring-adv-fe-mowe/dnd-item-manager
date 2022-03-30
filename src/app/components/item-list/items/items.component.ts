import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemList: Item[] = []

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemList = this.itemService.getItems()
  }

}
