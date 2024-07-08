export function telFix(tel) {
  if (tel) {
    tel = tel.replace(/[\(\)\s\-\+]/g, '');
    tel = tel.trim();
  }
  return tel;
}
