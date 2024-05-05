import TileUpdater from "../../src/TileUpdater";
import { appColor, refreshAllText, selectors, contrastColor } from "../fixtures/testData.json";

describe("Tile Update", () => {
  beforeEach(() => {
    cy.mount(<TileUpdater handleClick={() => void 0} />);
  });

  it("has background color", () => {
    cy.get(selectors.tileUpdate)
      .should("have.css", "backgroundColor")
      .and("be.colored", appColor);
  });

  it("has contast text", () => {
    cy.get(selectors.tileUpdate)
      .should("contain.text", refreshAllText)
      .and("have.css", "color")
      .and("be.colored", contrastColor);
  });

  it("is clickable", () => {
    const onClick = cy.stub();
    cy.mount(<TileUpdater handleClick={onClick} />);
    cy.get(selectors.tileUpdate)
      .click()
      .then(() => expect(onClick).to.be.called);
  });
});
