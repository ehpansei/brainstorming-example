import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsListComponent } from './dashboard/items-list/items-list.component';
import { ItemDetailComponent } from './dashboard/item-detail/item-detail.component';
import { CreateItemComponent } from './dashboard/create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsListComponent,
    ItemDetailComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
