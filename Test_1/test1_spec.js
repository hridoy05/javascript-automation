describe("test one bikroy.com",()=> {
  beforeEach(async()=>{
   browser.ignoreSynchronization = true
   await browser.get("https://bikroy.com/en")
  })
  it('get page', async() => {
    browser.ignoreSynchronization = true
    await browser.get("https://bikroy.com/en")
    
  });
  it('scroll down', async() => {
    await browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
    browser.sleep(2000)
  });
  it('find text', async() => {
    await element(by.className("copyright")).getText()
    
    
  });
  it('assert find text', () => {
    let ele = element(by.className("copyright"))
    expect(ele.getText()).toBe("Copyright © Saltside Technologies")
    
  });
  it('scroll up', async() => {
    await browser.executeScript("window.scrollTo(0,0)")
    browser.sleep(2000)
  });
  it('post your ad', async() => {
    await element(by.css("span.btn-post")).getText()
    
  });
  it('assert post your ad', async() => {
   let  ele = element(by.css("span.btn-post")).getText()
   expect(ele).toBe("POST YOUR AD")
    
  });
})