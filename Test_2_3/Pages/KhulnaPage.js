const basePage = require('./BasePage')
class KhulnaPage{
    constructor() {
        this.lowest_add_value = 'normal--2QYVk' 
        this.date_text = 'sub-title--37mkY'
        this.elemenet_text = 'heading--2u5sJ'
        this.number_button = 'call-button--3uvWj'
        this.valid_number = '.phone-numbers--2COKR'
    }
    async find_lowest_value(){ 
        return basePage.do_find_lowest_value(this.lowest_add_value)      
        
    }
    async click_on_lowest_value(){
        return basePage.do_click_lowest_value(this.lowest_add_value)
    }
    async get_date_text(){
        await this.click_on_lowest_value()
        return await basePage.find_date_text(this.date_text)
    }
    async get_element_text(){
        await this.get_date_text()
        return await basePage.find_element_text(this.elemenet_text)
    }
    async click_number(){
        await this.click_on_lowest_value()
        return await basePage.do_click_lowest_value(this.number_button)
    }
    async valid_phone_number(){
        await this.click_number()
        return await basePage.do_valid_phone_number(this.valid_number)
    }
   
}
module.exports = KhulnaPage