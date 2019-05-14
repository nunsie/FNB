import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { format } from './utils';

export default class FNB {

  browser: any
  page: any
  username: string
  password: string

  constructor(auth: Auth) {
    this.username = auth.username
    this.password = auth.password
  }

  async login() {
    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();

    await this.page.goto('https://www.fnb.co.za');

    await this.page.waitForSelector('#user');
    await this.page.type('#user', this.username);

    await this.page.waitForSelector('#pass');
    await this.page.type('#pass', this.password);

    await this.page.waitForSelector('#OBSubmit');
    await this.page.click('#OBSubmit');
    return true;
  }

  logout() {
    this.browser.close();
  }

  async accounts(): Promise<Array<{}>> {

    await this.page.waitForSelector('#headerInner > #headerButtons > #userShortcuts > #shortCutLinks > .shortCutLink:nth-child(1)')
    await this.page.click('#headerInner > #headerButtons > #userShortcuts > #shortCutLinks > .shortCutLink:nth-child(1)')

    await this.page.waitForSelector("[id^=tabelRow_]")
    const html = await this.page.content();

    const accounts = [];
    const $ = cheerio.load(html)
    $('[id^=tabelRow_]').each(function (i) {
      const name = $('[name=nickname]', this).text().trim()
      const number = $('[name=accountNumber]', this).text().trim()
      const balance = format($('[name=ledgerBalance]', this).text().trim())
      const available = format($('[name=availablebalance]', this).text().trim())
      accounts[i] = {
        name,
        number,
        balance,
        available
      }
    });

    return accounts.filter(account => account.name.length > 0)
  }

  // async cards(): Promise<Array<Card>> {
  //   return;
  // }

  // async transactions(account: string): Promise<Array<Transaction>> {
  //   return;
  // }

  // async transfer(source: string, destination: string, amount: number): Promise<Transaction> {
  //   return;
  // }

  // async payments(): Promise<Array<Payment>> {
  //   return;
  // }

  // async pay(source: string, destination: string): Promise<Payment> {
  //   return;
  // }

}
