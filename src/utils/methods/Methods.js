// 数字缩减
export function digitalreduction(data) {
  console.log(data);
  if (String(data).length < 4) {
    return String(data);
  } else if (String(data).length >= 4 && String(data).length < 7) {
    return (
      String(data).slice(0, String(data).length - 3) +
      '.' +
      String(data).slice(String(data).length - 3, String(data).length - 1) +
      ' K'
    );
  } else if (String(data).length >= 7 && String(data).length < 10) {
    return (
      String(data).slice(0, String(data).length - 6) +
      '.' +
      String(data).slice(String(data).length - 6, String(data).length - 4) +
      ' M'
    );
  } else if (String(data).length >= 10) {
    return (
      String(data).slice(0, String(data).length - 9) +
      '.' +
      String(data).slice(String(data).length - 9, String(data).length - 7) +
      ' B'
    );
  }
}
//加逗号
export function comma(data) {
  if (data) {
    return data.toLocaleString();
  }
}
