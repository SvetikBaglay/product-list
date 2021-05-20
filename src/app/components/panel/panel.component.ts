import { Component, Input, OnInit } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  @Input() text: string;
  @Input() handleSave: (s: string) => void;

  fontSize: string = "12";
  fontText: string = "One";

  handleFontSizeChange(e: InputEvent): void {
    this.fontSize = ((e.target as HTMLInputElement).value);
  }

  handleTextChange(e: InputEvent): void {
    this.fontText = ((e.target as HTMLInputElement).value);
  }

  finalString(fontSize:string, fontText:string) {
    return `<div style="fornt-size: ${fontSize}px;">${fontText}</div>`;
  }

  handleTemplateStringSave(e: MouseEvent): void {
    //console.log('handleSave: ', this.handleSave);
    const finaleTextSave = this.finalString(this.fontSize, this.fontText);
    this.handleSave(finaleTextSave);
  }

  ngOnInit() {
    this.fontText = this.text;
  }
}
