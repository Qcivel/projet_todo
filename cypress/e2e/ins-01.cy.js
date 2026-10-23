describe('Test de la todolist', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:8080/register')
    
  })
  it('Inscription avec des données valides',()=>{
    cy.get('input[placeholder="Prénom"]').type('ed');
    cy.get('input[placeholder="Nom"]').type('edward');
    cy.get('input[placeholder="email"]').type('ed.edward@gmail.fr');
    cy.get('input[placeholder="mot de passe"]').type('motdepasse');
    cy.get('input[placeholder="confirmer le mot de passe"]').type('motdepasse');
    cy.get('input[name="submit"]').click()
    cy.get('p').should('contain',"Le compte : ed.edward@gmail.fr a été ajouté en BDD")
  })
})