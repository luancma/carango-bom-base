import EventParserUtil from 'util/EventParserUtil';

describe('EventParserUtil tests', () => {
  describe('parseEventValueToNumberIfValueExist', () => {
    it('should not return NaN when event target value is empty', () => {
      const event = { target: { value: "" } };
      const result = EventParserUtil.parseEventValueToNumberIfValueExist(event);
      expect(isNaN(result)).toBe(false)
    })
  })
})