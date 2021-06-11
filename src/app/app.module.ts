import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { RouterModule } from '@angular/router';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    TemplateDetailsComponent,
    PanelComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'templates', component: TemplatesComponent },
      { path: 'templates/:id', component: TemplateDetailsComponent },
      { path: '**', redirectTo: 'templates', pathMatch: 'full'},
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/product-list/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
