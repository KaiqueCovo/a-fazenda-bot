const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();  
  await page.goto('https://afazenda.r7.com/a-fazenda-12/votacao');


  let votos = 0

  setInterval(async () => {
    try {
      await page.click('[data-id="561"]');
      await page.click('.voting-button');
    
      await page.evaluate(() => {
        let teste = document.querySelector('.voting-modal__close')
        console.log( teste )
        $(teste).click()
      })

      votos++
      console.log(`VOCÊ VOTOU: ${votos} VEZES`)
      
    } catch( err) {
      console.log( 'ERROR => ', err)
    }
      
  }, 5000)
})();