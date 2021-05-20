const { WebElement } = require("selenium-webdriver")

module.exports = class BasePage{
    /**
     * @param {string} locator className
     * @return {WebElement} lowest value
     */
    async do_find_lowest_value (locator){
        return await element.all(by.className(locator)).last()       
    }  
    
    /**
     * @param {string} locator className
     * @return {WebElement} 
     */
    async do_click_lowest_value(locator){
        return await element.all(by.className(locator)).last().click()
    }
    /**
     * @param {string} locator className
     * @return {WebElement} Date text 
     */
    async find_date_text(locator){
        return await element(by.className(locator)).getText()
    }

    /**
     * @param {string} locator className
     * @return {WebElement} element text
     */
    async find_element_text(locator){
        return await element(by.className(locator)).getText()
    }

   /**
     * @param {string} locator className
     * @return {WebElement} clicked element
    */ 

    async do_click_number_button(locator){
        return await element(by.className(locator))
    }
    /**
     * @param {string} locator css selector
     * @return {WebElement} phone numbers
    */ 
    async do_valid_phone_number(locator)
    {
        return await element.all(by.css(locator)).map(ele => ele.getText())
    }
}
