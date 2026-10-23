describe('Test de la todolist', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:8080/register')
    
  })
  it('Inscription avec des données valides',()=>{
    cy.get('input[placeholder="Prénom"]').type('Paul');
    cy.get('input[placeholder="Nom"]').type('Charles');
    cy.get('input[placeholder="email"]').type('paul.charles@gmail.fr');
    cy.get('input[placeholder="mot de passe"]').type('motdepasse');
    cy.get('input[placeholder="confirmer le mot de passe"]').type('motdepasse');
    cy.get('input[name="submit"]').click()
    cy.get('p').should('contain',"Le compte : Paul.charles@gmail.fr a été ajouté en BDD")
  })
})