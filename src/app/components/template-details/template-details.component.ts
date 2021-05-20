import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplatesService, ITemplate } from '../../services/templates.service';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css'],
  host: {
    '(document:mouseup)': 'handleMouseUp($event)'
  }
})

export class TemplateDetailsComponent implements OnInit {
  pageTitle = "Template Detail";
  errorMessage = "";
  template: ITemplate | null;
  selectedText: string = "";
  saveText: string = "";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private templatesService: TemplatesService) {}

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

  handleMouseUp(e: MouseEvent): void {
    if ((e.target as HTMLElement).closest('.editpanel')) return;
    if ((e.target as HTMLElement).closest('.editable')) {
      this.selectedText = document.getSelection().toString();
      return;
    }
    this.selectedText = "";
  }

  handleTemplateUpdate(saveText: string) {
    this.saveText = saveText;
    console.log('saved text: ', this.saveText);
  }
}
