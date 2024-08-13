import { mount } from '@vue/test-utils';

import LinkWithFallBack from '../src/LinkWithFallback.vue';

/**
 * Below is a single test for a UI component. Add additional
 * tests to better validate the functionality of the component.
 */

describe('LinkWithFallback', () => {
  const setupWrapper = function (props) {
    const options = { props };
    const wrapper = mount(LinkWithFallBack, options);
    return wrapper;
  };

  test('Renders plain text with no props', () => {
    const props = {
      link: undefined,
      text: undefined
    };
    const wrapper = setupWrapper(props);

    expect(wrapper)
      .toMatchSnapshot();
  });
});
