import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewSelectedComponent } from './review-selected/review-selected.component';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { MenuComponent } from './components/menu/menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { ReviewSelectedSpLeftComponent } from './components/review-selected-sp-left/review-selected-sp-left.component';
import { ReviewSelectedSpRightComponent } from './components/review-selected-sp-right/review-selected-sp-right.component';
import { MenuSearchFormComponent } from './components/menu-search-form/menu-search-form.component';
import { ReviewHomeComponent } from './review-home/review-home.component';
import { ReviewHomeSpLeftComponent } from './components/review-home-sp-left/review-home-sp-left.component';
import { ReviewHomeSpRightComponent } from './components/review-home-sp-right/review-home-sp-right.component';


@NgModule({
  declarations: [
    AppComponent,
    ReviewSelectedComponent,
    MenuComponent,
    ReviewSelectedSpLeftComponent,
    ReviewSelectedSpRightComponent,
    MenuSearchFormComponent,
    ReviewHomeComponent,
    ReviewHomeSpLeftComponent,
    ReviewHomeSpRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    InputTextModule,
    MenubarModule,
    SplitterModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    DividerModule,
    DropdownModule,
    InputTextareaModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
