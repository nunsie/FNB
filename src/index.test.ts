import FNB from './index';

describe('FNB', () => {
  // Assert if setTimeout was called properly
  it('creates a new fnb instance', () => {
    const fnb = new FNB({ username: 'username', password: 'password' })
    expect(fnb.username).toBe('username');
    expect(fnb.password).toBe('password');
  });
});
