import Tile from "../../src/Tile";
import { apiResponse, selectors, regexPatterns } from "../fixtures/testData.json";

describe("Tile", () => {
  beforeEach(() => {
    cy.mount(<Tile data={apiResponse} handleDataUpdate={() => void 0} />);
  });

  it("has image", () => {
    cy.get(`[alt = "${apiResponse.alt_description}"]`)
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", apiResponse.urls.thumb);
  });

  it("has description text", () => {
    cy.get(selectors.photoDescription)
      .invoke("text")
      .should("match", new RegExp(regexPatterns.autor))
      .and("match", new RegExp(regexPatterns.views))
      .and("match", new RegExp(regexPatterns.likes));
  });

  it("reacts to click", () => {
    const onClick = cy.stub();
    cy.mount(<Tile data={apiResponse} handleDataUpdate={onClick} />);
    cy.get(selectors.tilePhoto)
      .click()
      .then(() => expect(onClick).to.be.called);
  });
});
