import FNB from './index';

describe('FNB', () => {
  const fnb = new FNB({ username: process.env.USERNAME, password: process.env.PASSWORD })
  it('creates a new fnb instance', () => {
    expect(fnb.username).toBe(process.env.USERNAME);
    expect(fnb.password).toBe(process.env.PASSWORD);
  });

  it('logs in to online banking', async () => {
    const login = await fnb.login()
    expect(login).toBe(true);
  });

  it('retreives account listing', async () => {
    const accounts = await fnb.accounts()
    console.log('accounts', accounts)
    expect(accounts.length).toBeGreaterThan(0)
  });

  afterAll(() => {
    fnb.logout()
  });

});
