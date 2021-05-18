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


@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    TemplateDetailsComponent,
    PanelComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
