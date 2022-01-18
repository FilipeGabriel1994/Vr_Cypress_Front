class AccessPage {
    visit() {
        // cy.visit = acesso a pagina que estiver entre()
        return cy.visit("/");
    }
    forYou() {
        //.click() = executo o evento click no objeto retornado pelo cy.get
        return cy
            .get('a[href="onde-aceita.htm"]')
            .should('be.visible')
            .should('have.length', 1)
            .click()
    }
    localUse() {
        //.click() = executo o evento click no objeto retornado pelo cy.get
        return cy
            //.get('a[href="#rede-credenciada"]')
            .get('.vr-button--negative')
            .should('be.visible')
            .should('have.length', 1)
            .click()
            .wait(10000)
    }
    assertsInPage() {
        return cy
            .get('.form-search-estab')
            .should('be.visible')
            .should('have.length', 1)
    }
}
// exporto a classe SignupPage para que ela possa ser importada/usada na camada de testes
export default new AccessPage();