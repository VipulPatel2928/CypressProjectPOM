///<reference types = "cypress"/>

import ContactPageElements from '../pageelement/ContactPageElements.cy'

export default class ContactPageActions{

    constructor(){
        globalThis.contactelements = new ContactPageElements()
    }

    openURL(){
        cy.visit('https://www.techivp.com/contact')
    }

    verifyPagetitle(){
        cy.title().should('eq','Contact - TechiVP')
    }

    verifyPagecurrentURL(){
        cy.url().should('contain','https://www.techivp.com/contact')
    }

    SelectInqueryFor(option){
        contactelements.eleInqueryFor().select(option).should('have.value',option)
    }

    enterFirstLastName(firstname, lastname){
        contactelements.eleFirstLastName().type(firstname+' '+lastname).should('have.value',firstname+' '+lastname)

    }

    enterMobileNo(mobileno){
        contactelements.eleMobileNo().type(mobileno).should('have.value',mobileno)

    }

    enterEmail(email){
        contactelements.eleEmail().type(email).should('have.value',email)

    }

    enterMessage(message){
        contactelements.eleMessage().type(message).should('have.value',message)

    }
    
    firstLastNameValidation(validation){
        contactelements.eleFirstLastNameError().should('have.text',validation)
    }

    mobileValidation(validation){
        contactelements.eleMobileNoError().should('have.text',validation)
    }

    emailValidation(validation){
        contactelements.eleEmailError().should('have.text',validation)
    }

    messageValidation(validation){
        contactelements.eleMessageError().should('have.text',validation)
    }

    clickSubmitBtn(){
        contactelements.eleSubmitBtn().click()
    }
    
}