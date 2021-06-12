import { LitElement, css, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

export const FlexDirectionValues = [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
];

export const FlexWrapValues = [
  'nowrap',
  'wrap',
  'wrap-reverse'
];

export const JustifyContentValues = [
  'flex-start',
  'flex-end',
  'start',
  'end',
  'left',
  'right',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
];

export const AlignItemsValues = [
  'stretch',
  'flex-start',
  'start',
  'self-start',
  'flex-end',
  'end',
  'self-end',
  'center',
  'baseline'
];

export const AlignContentValues = [
  'flex-start',
  'start',
  'flex-end',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch'
];

@customElement('flex-layout')
export class FlexLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
    }
    :host([flex-direction="row"]) { flex-direction: row; }
    :host([flex-direction="row-reverse"]) { flex-direction: row-reverse; }
    :host([flex-direction="column"]) { flex-direction: column; }
    :host([flex-direction="column-reverse"]) { flex-direction: column-reverse; }
    :host([flex-wrap="nowrap"]) { flex-wrap: nowrap; }
    :host([flex-wrap="wrap"]) { flex-wrap: wrap; }
    :host([flex-wrap="wrap-reverse"]) { flex-wrap: wrap-reverse; }
    :host([justify-content="flex-start"]) { justify-content: flex-start; }
    :host([justify-content="flex-end"]) { justify-content: flex-end; }
    :host([justify-content="start"]) { justify-content: start; }
    :host([justify-content="end"]) { justify-content: end; }
    :host([justify-content="left"]) { justify-content: left; }
    :host([justify-content="right"]) { justify-content: right; }
    :host([justify-content="center"]) { justify-content: center; }
    :host([justify-content="space-between"]) { justify-content: space-between; }
    :host([justify-content="space-around"]) { justify-content: space-around; }
    :host([justify-content="space-evenly"]) { justify-content: space-evenly; }
    :host([align-items="stretch"]) { align-items: stretch; }
    :host([align-items="flex-start"]) { align-items: flex-start; }
    :host([align-items="start"]) { align-items: start; }
    :host([align-items="self-start"]) { align-items: self-start; }
    :host([align-items="flex-end"]) { align-items: flex-end; }
    :host([align-items="end"]) { align-items: end; }
    :host([align-items="self-end"]) { align-items: self-end; }
    :host([align-items="center"]) { align-items: center; }
    :host([align-items="baseline"]) { align-items: baseline; }
    :host([align-content="flex-start"]) { align-content: flex-start; }
    :host([align-content="start"]) { align-content: start; }
    :host([align-content="flex-end"]) { align-content: flex-end; }
    :host([align-content="end"]) { align-content: end; }
    :host([align-content="center"]) { align-content: center; }
    :host([align-content="space-between"]) { align-content: space-between; }
    :host([align-content="space-around"]) { align-content: space-around; }
    :host([align-content="space-evenly"]) { align-content: space-evenly; }
    :host([align-content="stretch"]) { align-content: stretch; }
  `;

  /**
   * Gets the flexDirection of the object.
   */
   get flexDirection(): string | null {
    if (this.hasAttribute('flex-direction')) {
      return this.getAttribute('flex-direction');
    }

    return null;
  }

  /**
   * Sets the flexDirection of the object.
   */
  set flexDirection(value: string | null) {
    if (!value) {
      this.removeAttribute('flex-direction');
    } else if (FlexDirectionValues.includes(value)) {
      this.setAttribute('flex-direction', value);
    }
  }

  /**
   * Gets the flexWrap of the object.
   */
   get flexWrap(): string | null {
    if (this.hasAttribute('flex-wrap')) {
      return this.getAttribute('flex-wrap');
    }

    return null;
  }

  /**
   * Sets the flexWrap of the object.
   */
  set flexWrap(value: string | null) {
    if (!value) {
      this.removeAttribute('flex-wrap');
    } else if (FlexWrapValues.includes(value)) {
      this.setAttribute('flex-wrap', value);
    }
  }

  /**
   * Gets the justifyContent of the object.
   */
   get justifyContent(): string | null {
    if (this.hasAttribute('justify-content')) {
      return this.getAttribute('justify-content');
    }

    return null;
  }

  /**
   * Sets the justifyContent of the object.
   */
  set justifyContent(value: string | null) {
    if (!value) {
      this.removeAttribute('justify-content');
    } else if (JustifyContentValues.includes(value)) {
      this.setAttribute('justify-content', value);
    }
  }

  /**
   * Gets the alignItems of the object.
   */
   get alignItems(): string | null {
    if (this.hasAttribute('align-items')) {
      return this.getAttribute('align-items');
    }

    return null;
  }

  /**
   * Sets the alignItems of the object.
   */
  set alignItems(value: string | null) {
    if (!value) {
      this.removeAttribute('align-items');
    } else if (AlignItemsValues.includes(value)) {
      this.setAttribute('align-items', value);
    }
  }

  /**
   * Gets the alignContent of the object.
   */
   get alignContent(): string | null {
    if (this.hasAttribute('align-content')) {
      return this.getAttribute('align-content');
    }

    return null;
  }

  /**
   * Sets the alignContent of the object.
   */
  set alignContent(value: string | null) {
    if (!value) {
      this.removeAttribute('align-content');
    } else if (AlignContentValues.includes(value)) {
      this.setAttribute('align-content', value);
    }
  }

  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
