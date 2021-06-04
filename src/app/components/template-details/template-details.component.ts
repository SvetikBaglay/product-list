import { Component, OnInit, ViewEncapsulation, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplatesService, ITemplate } from '../../services/templates.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css'],
  host: {
    '(document:mouseup)': 'handleMouseUp($event)'
  },
  encapsulation: ViewEncapsulation.None,
})

export class TemplateDetailsComponent implements OnInit {
  pageTitle = "Template Detail";
  errorMessage = "";
  template: ITemplate | null;
  selectedText: string = "";
  saveText: string = "";
  templateText: string = "";


  constructor(private route: ActivatedRoute,
    private router: Router,
    private templatesService: TemplatesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;
      this.templatesService.getTemplate(id).subscribe({
        next: template => {
          this.template = template
          this.templateText = template.template;
        },
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

  sanitizedText() {
    return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.templateText));
  }

  changeTemplateText(selectedText: string, saveText: string, template: ITemplate): string {
    let tmpl = template.template;
    let textIndex = tmpl.indexOf(selectedText);
    let textSubstr = tmpl.substring(0, textIndex);
    let selectedTextLength = selectedText.length;
    let textAnotherFinish = tmpl.substring(textIndex + selectedTextLength);

    return textSubstr + saveText + textAnotherFinish;
  }

  handleTemplateUpdate = (saveText: string): void => {
    this.saveText = saveText;

    this.templateText = this.changeTemplateText(this.selectedText, this.saveText, this.template);
  }

}

