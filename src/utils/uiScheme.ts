interface UISchema {
  tag: string
  props?: {
    [key: string]: string
  }
  children?: UISchema[] | string | null | undefined | number
}

interface PageSchema {
  ver: string,
  title?: string | null,
  envVariables?: Record<string, string>,
  ui?: UISchema,
}

export async function getPageSchema(): Promise<PageSchema | null> {
  let pageSchema: PageSchema | null = null;
  if ((window as unknown as Record<string, unknown>).pageSchema) {
    pageSchema = (window as unknown as Record<string, unknown>).pageSchema as PageSchema;
  } else {
    const metadata =  document.getElementById("pageSchema") as HTMLMetaElement;
    if (!metadata) return null;

    const pageSchemaStr = metadata.content;
    if (!pageSchemaStr) return null;

    try {
      pageSchema = JSON.parse(pageSchemaStr);
    } catch (err) {
      console.error(err);
    }
  }

  return pageSchema;
}

export function createElementByUISchema(uiSchema?: UISchema | string | number | null): HTMLElement | Text | null {
  if (typeof uiSchema === "string") {
    return document.createTextNode(uiSchema);
  } else if (typeof uiSchema === "number") {
    return document.createTextNode(uiSchema + '');
  } else if (typeof uiSchema === "object" && uiSchema?.tag) {
    const element = document.createElement(uiSchema.tag);
    if (uiSchema.props) {
      for (const [propKey, propVal] of Object.entries(uiSchema.props)) {
        element.setAttribute(propKey, propVal);
      }
    }
    if (uiSchema.children) {
      const childrenUISchema  = Array.isArray(uiSchema.children) ? uiSchema.children : [ uiSchema.children ];
      for (const childUISchema of childrenUISchema) {
        const childElement = createElementByUISchema(childUISchema);
        childElement && element.appendChild(childElement);
      }
    }
    return element;
  }

  return null;
}

export function createEnvVariables(pageSchema: PageSchema | null): void {
  if (!pageSchema?.envVariables) return;
  for (const [propKey, propVal] of Object.entries(pageSchema?.envVariables)) {
    if (!Object.prototype.hasOwnProperty.call(window, propKey)) {
      (window as unknown as Record<string, unknown>)[propKey] = propVal;
    }
  }
}

export function createDocumentTitle(pageSchema: PageSchema | null): void {
  if (!pageSchema?.title) return;
  document.title = pageSchema.title;
}


