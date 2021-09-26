import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from "primeng/ripple";
import { MenuComponent } from './shared/menu/menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import { SplitterComponent } from './shared/splitter/splitter.component';
import { SplitterLeftComponent } from './shared/splitter-left/splitter-left.component';
import { SplitterRightComponent } from './shared/splitter-right/splitter-right.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SplitterComponent,
    SplitterLeftComponent,
    SplitterRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    SplitterModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    DividerModule,
    RippleModule,
    DropdownModule,
    InputTextareaModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
