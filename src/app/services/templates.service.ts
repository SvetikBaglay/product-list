import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface ITemplate {
  id?: number;
  name: string;
  template?: string;
  modified?: number;
}

@Injectable({
  providedIn: 'root'
})

export class TemplatesService {
  private templatesUrl = 'api/templates/';
  private templates: ITemplate[] = [];
  constructor(private http: HttpClient) { }

  getTemplate(id: number): ITemplate {
    let template = this.getTemplates().find( item => item.id == id )
    return template
  }

  getTemplates(): ITemplate[] {
    if (this.templates.length === 0) {
      this.templates = [
        {
          id: 1,
          name: "One",
          template: "<div class='template'><div class='editable'>One</div><div class='container'><div class='editable'>Two</div><div class='editable'>Three</div></div></div>",
          modified: 1516008350380
        },
        {
          id: 2,
          name: "Two",
          template: "<div class='template'><div class='editable'>One</div><div class='container'><div class='editable'>Two</div><div class='editable'>Three</div></div></div>",
          modified: 1516008489616
        },
        {
          id: 3,
          name: "Three",
          template: "<div class='template'><div class='editable'>One</div><div class='container'><div class='editable'>Two</div><div class='editable'>Three</div></div></div>",
          modified: 1516008564742
        }
      ];
    }

    return this.templates;
  }

  update(template: ITemplate) {
    let i = 0;
    let newArrTemplate =  [];
    for (i = 0; i < this.templates.length; i++) {
      if (this.templates[i].id != template.id) {
        newArrTemplate.push(this.templates[i])
      } else {
        continue
      }
    }
    newArrTemplate.push(template);
    this.templates = newArrTemplate;
  }
}



