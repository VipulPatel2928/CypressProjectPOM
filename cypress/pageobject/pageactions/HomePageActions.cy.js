///<reference types = "cypress"/>

import HomePageElements from '../pageelement/HomePageElements.cy'

export default class HomePageActions{

    constructor(){
        globalThis.homeelements = new HomePageElements();
    }

    openURL(){
        cy.visit('https://www.techivp.com/')
    }

    verifyPagetitle(){
        cy.title().should('eq','TechiVP - Software Testing Training Provider')
    }

    verifyPagecurrentURL(){
        cy.url().should('contain','https://www.techivp.com/')
    }
    clickReadMoreBtn(){
        homeelements.eleReadMoreBtn().click();
    }

}