import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should reverse in pipe', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
