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
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ReviewSelectedSpLeftComponent } from './components/review-selected-sp-left/review-selected-sp-left.component';
import { ReviewSelectedSpRightComponent } from './components/review-selected-sp-right/review-selected-sp-right.component';
import { MenuSearchFormComponent } from './components/menu-search-form/menu-search-form.component';
import { ReviewHomeComponent } from './review-home/review-home.component';
import { ReviewHomeSpLeftComponent } from './components/review-home-sp-left/review-home-sp-left.component';
import { ReviewHomeSpRightComponent } from './components/review-home-sp-right/review-home-sp-right.component';
import { UseCaseDetailsComponent } from './use-case-details/use-case-details.component';
import { NewUseCaseComponent } from './new-use-case/new-use-case.component';
import { EnterpriseLibraryComponent } from './enterprise-library/enterprise-library.component';
import { ToolsComponent } from './tools/tools.component';
import { TreeModule } from 'primeng/tree';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { AutoFillCaseComponent } from './components/auto-fill-case/auto-fill-case.component';
import { SaveSpecsModalComponent } from './components/save-specs-modal/save-specs-modal.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {DialogModule} from "primeng/dialog";
import { OpenSpecsComponent } from './components/open-specs/open-specs.component';
import {ListboxModule} from "primeng/listbox";
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';


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
    ReviewHomeSpRightComponent,
    NewUseCaseComponent,
    UseCaseDetailsComponent,
    EnterpriseLibraryComponent,
    ToolsComponent,
    TreeViewComponent,
    AutoFillCaseComponent,
    SaveSpecsModalComponent,
    OpenSpecsComponent,
    TabMenuComponent,
    DashboardComponent,
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
        ScrollPanelModule,
        TabViewModule,
        DividerModule,
        DropdownModule,
        InputTextareaModule,
        CardModule,
        TreeModule,
        ClickOutsideModule,
        OverlayPanelModule,
        DialogModule,
        ListboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
