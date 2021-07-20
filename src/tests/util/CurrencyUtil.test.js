import CurrencyUtil from 'util/CurrencyUtil';

describe('CurrencyUtil tests', () => {
  describe('formatCurrencyWithDots', () => {
    it('should return 10.000 as string if we pass 10000 as number', () => {
      expect(CurrencyUtil.formatCurrencyWithDots(10000)).toBe('10.000')
    })
  })
})