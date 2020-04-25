export class DataService {
  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 3700);
    });
    return resultPromise;
  }
}
