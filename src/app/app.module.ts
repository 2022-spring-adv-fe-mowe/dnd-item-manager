import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FiltersComponent } from './components/item-list/filters/filters.component';
import { InventoryComponent } from './components/item-list/inventory/inventory.component';
import { ItemsComponent } from './components/item-list/items/items.component';
import { PossesionComponent } from './components/item-list/inventory/possesion/possesion.component';
import { ItemComponent } from './components/item-list/items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ItemListComponent,
    FiltersComponent,
    InventoryComponent,
    ItemsComponent,
    PossesionComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
