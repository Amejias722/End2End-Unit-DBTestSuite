import jestSerializerVueTJW from 'jest-serializer-vue-tjw';

export default {
  test: function (received) {
    const isHtmlString = (
      typeof(received) === 'string' &&
      (
        received.startsWith('<') ||
        received.startsWith('"<')
      )
    );
    const isVueWrapper = (
      typeof(received) === 'object' &&
      typeof(received.html) === 'function'
    );
    return isHtmlString || isVueWrapper;
  },
  print: function (received) {
    return jestSerializerVueTJW.print(received);
  }
};
