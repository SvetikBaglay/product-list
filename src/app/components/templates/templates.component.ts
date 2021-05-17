import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplatesService, ITemplate } from '../../services/templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  pageTitle = 'Hi';
  templates: ITemplate[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private templateServise: TemplatesService) {

  }

  ngOnInit(): void {
    this.templateServise.getTemplates().subscribe({
      next: (templates) => this.templates = templates,
      error: (resp) => console.log('resp: ', resp)
    });
  }
}
