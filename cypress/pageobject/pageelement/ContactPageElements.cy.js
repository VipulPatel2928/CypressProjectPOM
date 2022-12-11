///<reference types = "cypress"/>

import locator from '../PageLocator/ContactPageLocator.json'


export default class ContactPageElements{
   eleInqueryFor(){
    return cy.get(locator.inqueryfor_lo);
   }

   eleFirstLastName(){
    return cy.get(locator.first_last_name_lo)
   }

   eleMobileNo(){
    return cy.get(locator.mobileno_lo)
   }
   eleEmail(){
    return cy.get(locator.email_lo)
   }

   eleMessage(){
    return cy.get(locator.message_lo)
   }

   eleFirstLastNameError(){
    return cy.get(locator.contact_name_error_lo)
   }

   eleMobileNoError(){
    return cy.get(locator.contact_mobile_error_lo)
   }
   eleEmailError(){
    return cy.get(locator.contact_email_error_lo)
   }

   eleMessageError(){
    return cy.get(locator.contact_message_error_lo)
   }

   eleSubmitBtn(){
    return cy.get(locator.submitBtn_lo)
   }
}