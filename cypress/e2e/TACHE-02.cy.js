describe('Test de la todolist', () => {
  beforeEach(() => {
    // Connexion
    cy.visit('http://localhost:8080/login')
    cy.get('input[name="email"]').type("paul.charles@gmail.fr");
    cy.get('input[name="password"]').type("motdepasse");
    cy.get('input[name="submit"]').click()
    cy.visit('http://localhost:8080/task/new')
  })
  it("Ajout avec un champ obligatoire vide",()=>{
    
    cy.get('textarea[name="description"]').type('Le temps risque de manquer ');
    cy.get('input[type="datetime-local"]').type('2026-10-23T16:30');
    cy.get('select[name="repeat"]').select('Hebdomadaire');
    cy.get('select[name="categories[]"]').select('Evaluation');
    cy.get('input[name="submit"]').click()
    cy.get('input[name="title"]').invoke('prop','validationMessage').should('equal','Veuillez renseigner ce champ.')
  })
})