export function getInvoice(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ customerId: 300 });
    }, 3000);
  });
}

export function getCustomer(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 300) {
        resolve({ addressId: 500 });
      } else {
        reject('wrong');
      }
    }, 3000);
  });
}

export function getAddress(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ city: 'Bengaluru' });
    }, 3000);
  });
}
