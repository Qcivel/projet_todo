describe('Test de la todolist', () => {
  beforeEach(() => {
    
   cy.visit('http://localhost:8080/')
    
  })
  it("Accès à la page sans être connecté",()=>{
    cy.visit('http://localhost:8080/task/new')
    cy.get('input[name="title"]').type("Finir l'évaluation");
    cy.get('textarea[name="description"]').type('Le temps risque de manquer ');
    cy.get('input[type="datetime-local"]').type('2026-10-23T16:30');
    cy.get('select[name="repeat"]').select('Hebdomadaire');
    cy.get('select[name="categories[]"]').select('Evaluation');
    cy.get('input[name="submit"]').click()
    cy.get('input[name="title"]').invoke('prop','validationMessage').should('equal','Veuillez renseigner ce champ.')
  })
})