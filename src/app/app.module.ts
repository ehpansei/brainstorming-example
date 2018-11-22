import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material modules
import {
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
} from '@angular/material';

// FxFlex
import { FlexLayoutModule } from '@angular/flex-layout';

// Our Components
import { AppComponent } from './app.component';
import { ItemsListComponent } from './dashboard/items-list/items-list.component';
import { ItemDetailComponent } from './dashboard/item-detail/item-detail.component';
import { CreateItemComponent } from './dashboard/create-item/create-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
