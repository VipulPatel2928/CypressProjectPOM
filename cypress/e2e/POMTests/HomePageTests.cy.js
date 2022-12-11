///<reference types = "cypress"/>

import HomePageActions from '../../pageobject/pageactions/HomePageActions.cy'

describe('Home Pag Test Cases', function () {

     const homeactions = new HomePageActions();
 
     beforeEach(()=>{
        // function to open url called from here
        homeactions.openURL();
     })

    it('Test Case 1 : Verify page title', () => {
        homeactions.verifyPagetitle()
    })//end of it

    it('Test Case 2 : Verify page current url', () => {
        homeactions.verifyPagecurrentURL()
    })//end of it

    it('Test Case 3 : Click More button', () => {
        homeactions.clickReadMoreBtn();
    })//end of it

})//end of describe 