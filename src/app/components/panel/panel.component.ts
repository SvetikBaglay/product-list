import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  @Input() text: string;
  @Input() handleSave: (s: string) => void;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  fontSize: string = "12";
  fontText: string = "One";

  handleFontSizeChange(e: InputEvent): void {
    this.fontSize = ((e.target as HTMLInputElement).value);
  }

  handleTextChange(e: InputEvent): void {
    this.fontText = ((e.target as HTMLInputElement).value);
  }

  finalString(fontSize: string, fontText: string) {
    const style = this.sanitizer.sanitize(SecurityContext.STYLE, this.sanitizer.bypassSecurityTrustStyle(`font-size: ${fontSize}px`));

    return `<span style=\"${style}\">${fontText}</span>`;
  }

  handleTemplateStringSave(e: MouseEvent): void {
    const finaleTextSave = this.finalString(this.fontSize, this.fontText);
    this.handleSave(finaleTextSave);
  }

  ngOnInit() {
    this.fontText = this.text;
  }
}
