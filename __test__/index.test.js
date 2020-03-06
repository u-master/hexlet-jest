import reverse from '../src/index.js';

test('Test reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
  });