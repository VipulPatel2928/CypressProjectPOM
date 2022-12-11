///<reference types = "cypress"/>

import ContactPageActions from '../../pageobject/pageactions/ContactPageActions.cy'

describe('Contact Page Test Cases', function () {

     const contactactions = new ContactPageActions;

     before(()=>{

          cy.fixture('TestData.json').then((data)=>{
            globalThis.data = data;
          })        
     })
 
     beforeEach(()=>{
        // function to open url called from here
        contactactions.openURL();
     })
    it('Test Case 1 : Fill ENQUIRE NOW form with use of fixure file', () => {
        contactactions.SelectInqueryFor(data.courseselection);
        contactactions.enterFirstLastName(data.firstname,data.lastname)
        contactactions.enterMobileNo(data.mobileno)
        contactactions.enterEmail(data.email)
        contactactions.enterMessage(data.message)
    })//end of it

    it('Test Case 4 : Fill ENQUIRE NOW form Blank field Verification', () => {
        contactactions.clickSubmitBtn();
        contactactions.firstLastNameValidation(data.blankfieldvalidationmsg);
        contactactions.mobileValidation(data.blankfieldvalidationmsg);
        contactactions.emailValidation(data.blankfieldvalidationmsg);
        contactactions.messageValidation(data.blankfieldvalidationmsg);
    })//end of it


})//end of describe 