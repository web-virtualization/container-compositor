import { FlexLayout } from './FlexLayout';

describe('FlexLayout', () => {
  it('should has correct props and attributes', () => {
    const flexLayout = new FlexLayout();

    flexLayout.flexDirection = "row";
    expect(flexLayout.flexDirection).toBe(flexLayout.getAttribute("flex-direction"));
    flexLayout.flexDirection = null;
    expect(flexLayout.flexDirection).toBe(flexLayout.getAttribute("flex-direction"));

    flexLayout.flexWrap = "nowrap";
    expect(flexLayout.flexWrap).toBe(flexLayout.getAttribute("flex-wrap"));
    flexLayout.flexWrap = null;
    expect(flexLayout.flexWrap).toBe(flexLayout.getAttribute("flex-wrap"));

    flexLayout.justifyContent = "flex-start";
    expect(flexLayout.flexDirection).toBe(flexLayout.getAttribute("justify-content"));
    flexLayout.justifyContent = null;
    expect(flexLayout.flexDirection).toBe(flexLayout.getAttribute("justify-content"));

    flexLayout.alignItems = "stretch";
    expect(flexLayout.alignItems).toBe(flexLayout.getAttribute("align-items"));
    flexLayout.alignItems = null;
    expect(flexLayout.alignItems).toBe(flexLayout.getAttribute("align-items"));

    flexLayout.alignContent = "flex-start";
    expect(flexLayout.alignContent).toBe(flexLayout.getAttribute("align-content"));
    flexLayout.alignContent = null;
    expect(flexLayout.alignContent).toBe(flexLayout.getAttribute("align-content"));
  });
});
