import NewPhoto from "../../src/NewPhoto";
import { appColor, selectors } from "../fixtures/testData.json";

describe("New Photo Button", () => {
  beforeEach(() => {
    cy.mount(<NewPhoto handleClick={() => void 0} />);
  });

  it("has color", () => {
    cy.get(selectors.tileNew)
      .should("have.css", "borderColor")
      .and("be.colored", appColor);

    cy.get(selectors.tileNew).should("have.css", "color").and("be.colored", appColor);
  });

  it("has background image", () => {
    cy.get(selectors.tileNew).then(($element) => {
      const backgroundImage = $element.css("background-image");
      expect(backgroundImage).to.contain(".svg");
    });
  });

  it("is clickable", () => {
    const onClick = cy.stub();
    cy.mount(<NewPhoto handleClick={onClick} />);
    cy.get(selectors.tileNew)
      .click()
      .then(() => expect(onClick).to.be.called);
  });
});
