import { greet } from './greet';

describe('greet', () => {
  it('greet should contain hello', () => {
    const result = greet('Anna');

    expect(result).toBe('Welcome Anna');
    expect(result).toContain('Anna');
  });
});
