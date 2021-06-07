import { html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators";
import { styleMap } from 'lit/directives/style-map.js';

export class Container extends LitElement {

  @property({type: String})
  background = 'none';

  @property({type: String})
  padding = "";

  @property({type: String})
  margin = "";

  @property({type: String})
  with = "";

  @property({type: String})
  minWith = "";

  @property({type: String})
  maxWith = "";

  @property({type: String})
  height = "";

  @property({type: String})
  minHeight = "";

  @property({type: String})
  maxHeight = "";

  render(): TemplateResult {
    const inlineStyles = styleMap({
      padding: this.padding,
      margin: this.margin,
      background: this.background,
      with: this.with,
      minWith: this.minWith,
      maxWith: this.maxWith,
      height: this.height,
      minHeight: this.minHeight,
      maxHeight: this.maxHeight,
    })

    return html`
      <div style=${inlineStyles}>
        <slot></slot>
      </div>
    `;
  }
}
