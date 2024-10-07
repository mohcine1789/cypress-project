class InstancingPerformancePage {

    public typeIntancesCount(count: string) {
        return cy.getIframeBody()
            .find("[aria-labelledby='lil-gui-name-2']")
            .should('be.visible')
            .clear().type(count);
    }

    public selecInstancingtMethod(value: string) {
        return cy.getIframeBody()
            .find('[aria-labelledby="lil-gui-name-1"]')
            .select(value)
            .should('have.value', value);
    }

    public GPUCallCount(){
        return cy.getIframeBody().find("[class='gui-stats']");
    }
}


export default new InstancingPerformancePage();
