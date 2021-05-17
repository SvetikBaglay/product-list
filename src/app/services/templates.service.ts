import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface ITemplate {
  id: number;
  name: string;
  template: string;
  modified: number;
}

@Injectable({
  providedIn: 'root'
})

export class TemplatesService {
  private templatesUrl = 'api/templates/';
  constructor(private http: HttpClient) { }

  getTemplate(id: number): Observable<ITemplate> {
    return this.http.get<ITemplate>(`${this.templatesUrl}/${id}.json`);
  }

  getTemplates(): Observable<ITemplate[]> {
    return this.http.get<ITemplate[]>(`${this.templatesUrl}/templates.json`);
  }
}
