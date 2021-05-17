const basePage = require('./BasePage')
class RangpurPage{
    constructor() {
        //declare dom properties for finding web elements
        this.lowest_add_value = 'normal--2QYVk' //className
        this.date_text = 'sub-title--37mkY' //className
        this.elemenet_text = 'heading--2u5sJ' //className
        this.number_button = 'call-button--3uvWj' //className
        this.valid_number = '.phone-numbers--2COKR' //css
    }
    //sending parameter for calling locator from baseclass (by.className)
    async find_lowest_value(){ 
        return basePage.do_find_lowest_value(this.lowest_add_value)      
        
    }
    //sending parameter for calling locator from baseclass (by.className)
    async click_on_lowest_value(){
        return basePage.do_click_lowest_value(this.lowest_add_value)
    }
    //sending parameter for calling locator from baseclass (by.className)
    async get_date_text(){
        await this.click_on_lowest_value()
        return await basePage.find_date_text(this.date_text)
    }
    //sending parameter for calling locator from baseclass (by.className)
    async get_element_text(){
        await this.get_date_text()
        return await basePage.find_element_text(this.elemenet_text)
    }
    //sending parameter for calling locator from baseclass (by.className)
    async click_number(){
        await this.click_on_lowest_value()
        return await basePage.do_click_lowest_value(this.number_button)
    }
    //sending parameter for calling locator from baseclass (by.css)
    async valid_phone_number(){
        await this.click_number()
        return await basePage.do_valid_phone_number(this.valid_number)
    }
   
}
module.exports = RangpurPage