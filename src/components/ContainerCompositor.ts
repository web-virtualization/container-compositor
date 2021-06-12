import { LitElement, css, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { getPageSchema, createEnvVariables, createElementByUISchema } from '../utils/uiScheme';

@customElement('container-compositor')
export class ContainerCompositor extends LitElement {

  static styles = css`
  :host {
    width: 100%;
    height: 100%;
  }
  `;

  pageUI: HTMLElement | Text | null = null

  constructor() {
    super();

    const pageSchema = getPageSchema();
    // env
    createEnvVariables(pageSchema);
    this.pageUI = createElementByUISchema(pageSchema?.ui);
  }

  render(): TemplateResult {
    return html`
      ${ this.pageUI }
    `;
  }
}
