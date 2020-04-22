import { checkURL } from '../client/js/URLChecker';
test('validate url', () => {
  expect(checkURL('https://www.twitter.com')).toBe(true);
  expect(checkURL('ddd')).toBe(false);
  expect(checkURL('https:/website')).toBe(false);
});
