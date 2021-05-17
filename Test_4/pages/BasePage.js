class BasePage{
    //set locator and action
    async open_link(name){
        await element(by.linkText(name)).click()

    }
}
module.exports = new BasePage()