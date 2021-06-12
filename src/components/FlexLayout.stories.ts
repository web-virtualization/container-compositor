import { html } from 'lit-html';
import { FlexDirectionValues, FlexWrapValues, JustifyContentValues, AlignItemsValues } from  './FlexLayout';

export default {
  title: 'FlexLayout',
  argTypes: {
    flexDirection: {
      defaultValue: FlexDirectionValues[0],
      options: FlexDirectionValues,
      control: { type: 'select' }
    },
    flexWrap: {
      defaultValue: FlexWrapValues[0],
      options: FlexWrapValues,
      control: { type: 'select' }
    },
    justifyContent: {
      defaultValue: JustifyContentValues[0],
      options: JustifyContentValues,
      control: { type: 'select' }
    },
    alignItems: {
      defaultValue: AlignItemsValues[0],
      options: AlignItemsValues,
      control: { type: 'select' }
    },
    alignContent: {
      defaultValue: AlignItemsValues[0],
      options: AlignItemsValues,
      control: { type: 'select' }
    }
  }
};

const Template = (args: Record<string, string>): ReturnType<typeof html> => html`
  <flex-layout
    flex-direction=${args.flexDirection}
    flex-wrap=${args.flexWrap}
    justify-content=${args.justifyContent}
    align-items=${args.alignItems}
    align-content=${args.alignContent}
    >
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
    <button>Button 6</button>
    <button>Button 7</button>
    <button>Button 8</button>
    <button>Button 9</button>
    <button>Button 10</button>
  </flex-layout>
`;

export const Primary = Template.bind({});
