//=======================================
//              CHECK TC ID             =
//=======================================
export function useTCValid(value) {
  const newValue = value.toString();
  let isEleven = /^[0-9]{11}$/.test(newValue);
  let totalX = 0;
  for (let i = 0; i < 10; i++) {
    totalX += Number(newValue.substr(i, 1));
  }
  let isRuleX = totalX % 10 == newValue.substr(10, 1);
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(newValue.substr(i, 1));
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(newValue.substr(i, 1));
  }
  let isRuleY = (totalY1 * 7 - totalY2) % 10 == newValue.substr(9, 0);
  return isEleven && isRuleX && isRuleY;
}
