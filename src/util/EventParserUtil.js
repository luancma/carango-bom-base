class EventParserUtil {
  static parseEventValueToNumberIfValueExist = event => {
    if (event && event.target && event.target.value) {
      return parseFloat(event.target.value);
    }
  
    return "";
  }
}

export default EventParserUtil;