import { LitElement, css, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('flex-box')
export class FlexBox extends LitElement {
  static styles = css`
    :host {
      display: flex;
    }
  `;

  render(): TemplateResult {
    return html`
      <div>
      12121211
      </div>
    `;
  }
}
