describe('Test de la todolist', () => {
  beforeEach(() => {
    // Connexion
    cy.visit('http://localhost:8080/login')
    cy.get('input[name="email"]').type("paul.charles@gmail.fr");
    cy.get('input[name="password"]').type("motdepasse");
    cy.get('input[name="submit"]').click()
    cy.visit('http://localhost:8080/task/new')
  })
  it("Ajout d’une tâche valide avec une catégorie",()=>{
    cy.get('input[name="title"]').type("Finir l'évaluation");
    cy.get('textarea[name="description"]').type('Le temps risque de manquer ');
    cy.get('input[type="datetime-local"]').type('2026-10-23T16:30');
    cy.get('select[name="repeat"]').select('Hebdomadaire');
    cy.get('select[name="categories[]"]').select('Evaluation');
    cy.get('input[name="submit"]').click()
    cy.get('p').should('contain',"La tache : Finir l'évaluation a été ajouté en BDD")
  })
})