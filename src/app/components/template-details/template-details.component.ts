import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplatesService, ITemplate } from '../../services/templates.service';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})

export class TemplateDetailsComponent implements OnInit {
  pageTitle = "Template Detail";
  errorMessage = "";
  template: ITemplate | null = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private templatesService: TemplatesService) {
}

ngOnInit(): void {
  const param = this.route.snapshot.paramMap.get('id');

  if (param) {
    const id = +param;
    this.templatesService.getTemplate(id).subscribe({
      next: template => this.template = template,
      error: (resp) => this.errorMessage = resp
    })
  }
}

}
