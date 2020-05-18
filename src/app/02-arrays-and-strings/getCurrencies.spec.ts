import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('it should return the suppported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
