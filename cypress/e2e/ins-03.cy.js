describe('Test de la todolist', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:8080/register')
    
  })
  it('Inscription avec deux mots de passe différents',()=>{
    cy.get('input[placeholder="Prénom"]').type('Paul');
    cy.get('input[placeholder="Nom"]').type('Charles');
    cy.get('input[placeholder="email"]').type('paul.charles@gmail.fr');
    cy.get('input[placeholder="mot de passe"]').type('motdepasse');
    cy.get('input[placeholder="confirmer le mot de passe"]').type('unautremotdepasse');
    cy.get('input[name="submit"]').click()
    cy.get('p').should('contain',"Les 2 mots de passe ne sont pas identiques")
  })
})