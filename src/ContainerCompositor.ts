import * as uiScheme from './utils/uiScheme';

export class ContainerCompositor extends HTMLDivElement {
  private hasInit = false;

  connectedCallback():void {
    if (this.hasInit) return;
    this.init();
    this.hasInit = true;
  }

  async init(): Promise<void> {
    const pageSchema = await uiScheme.getPageSchema();
    if (!pageSchema) return;

    uiScheme.createEnvVariables(pageSchema);
    uiScheme.createDocumentTitle(pageSchema);

    const rootElement = uiScheme.createElementByUISchema(pageSchema.ui);
    if (!rootElement) return;

    this.appendChild(rootElement);
  }
}

window.customElements.define("container-compositor", ContainerCompositor, {
  extends: 'div'
});
