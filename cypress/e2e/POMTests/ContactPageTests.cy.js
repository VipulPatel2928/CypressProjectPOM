///<reference types = "cypress"/>

import ContactPageActions from '../../pageobject/pageactions/ContactPageActions.cy'

describe('Contact Page Test Cases', function () {

     const contactactions = new ContactPageActions;
 
     beforeEach(()=>{
        // function to open url called from here
        contactactions.openURL();
     })

    it('Test Case 1 : Verify page title', () => {
        contactactions.verifyPagetitle()
    })//end of it

    it('Test Case 2 : Verify current page URL', () => {
        contactactions.verifyPagecurrentURL()
    })//end of it

    it('Test Case 3 : Fill ENQUIRE NOW form', () => {
        contactactions.SelectInqueryFor('Selenium - Advanced');
        contactactions.enterFirstLastName('Vipul','Patel')
        contactactions.enterMobileNo('9638527412')
        contactactions.enterEmail('inquiry@techivp.com')
        contactactions.enterMessage('Hi There, I would like to register as student and like to learn Advanced Selenium. Please let me know about the fees and course duration')
    })//end of it

    it('Test Case 4 : Fill ENQUIRE NOW form Blank field Verification', () => {
        contactactions.clickSubmitBtn();
        contactactions.firstLastNameValidation('This field is required.');
        contactactions.mobileValidation('This field is required.');
        contactactions.emailValidation('This field is required.');
        contactactions.messageValidation('This field is required.');
    })//end of it


})//end of describe 