describe('Test de la todolist', () => {
  beforeEach(() => {
    // Connexion
    cy.visit('http://localhost:8080/login')
    cy.get('input[name="email"]').type("paul.charles@gmail.fr");
    cy.get('input[name="password"]').type("motdepasse");
    cy.get('input[name="submit"]').click()
    cy.visit('http://localhost:8080/task/activeall')
  })
  it("Ajout d’une tâche valide avec une catégorie",()=>{
    cy.contains('button','désactiver').click()
    cy.wait(2000)
    cy.get('article').contains('h3',"Finir l'évaluation");
  })
})