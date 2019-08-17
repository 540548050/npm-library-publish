export function add(a, b) {
  return a + b;
}
export function he() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ssss');
    }, 2000);
  });
}
