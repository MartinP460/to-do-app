describe("To-do app", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("to-do app");
  });

  it("user can add new tasks", function () {
    cy.getBySel("new-task").type("Buy groceries");
    cy.getBySel("submit-task").click();

    cy.contains("Buy groceries");
  });

  describe("when a new task is added", function () {
    beforeEach(function () {
      cy.getBySel("new-task").type("Do the dishes");
      cy.getBySel("submit-task").click();
    });

    it("task can be starred", function () {
      cy.contains("Do the dishes").parent().trigger("mouseover");
      cy.contains("Do the dishes").parent().find("button.star-task").click();

      cy.contains("Do the dishes")
        .parent()
        .find("button.star-task > svg")
        .should("have.class", "text-amber-400");
    });
  });
});
