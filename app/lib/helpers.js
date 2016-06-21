export function isBrowser() {
  const N = global.navigator;
  return N && N.userAgent && N.userAgent.indexOf('Mozilla/') != -1;
}
