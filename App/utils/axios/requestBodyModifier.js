export default (data) => {
  if (data) {
    console.log(data);
    const newData = {...data};
    const keys = Object.keys(newData);
    if (keys.includes('order')) {
      if (
        typeof newData.order === 'string' &&
        !newData.order.startsWith('v1/') &&
        !newData.order.startsWith('/v1/')
      ) {
        newData.order = `v1/orders/${newData.order}`;
      } else if (typeof newData.order === 'number') {
        newData.order = `v1/orders/${newData.order}`;
      }
    }
    if (keys.includes('city')) {
      if (
        typeof newData.city === 'string' &&
        !newData.city.startsWith('v1/') &&
        !newData.city.startsWith('/v1/')
      ) {
        newData.city = `v1/cities/${newData.city}`;
      } else if (typeof newData.city === 'number') {
        newData.city = `v1/cities/${newData.city}`;
      }
    }
    if (keys.includes('country')) {
      if (
        typeof newData.country === 'string' &&
        !newData.country.startsWith('v1/') &&
        !newData.country.startsWith('/v1/')
      ) {
        newData.country = `v1/countries/${newData.country}`;
      } else if (typeof newData.country === 'number') {
        newData.country = `v1/countries/${newData.country}`;
      }
    }
    if (keys.includes('state')) {
      if (
        typeof newData.state === 'string' &&
        !newData.state.startsWith('v1/') &&
        !newData.state.startsWith('/v1/')
      ) {
        newData.state = `v1/states/${newData.state}`;
      } else if (typeof newData.state === 'number') {
        newData.state = `v1/states/${newData.state}`;
      }
    }
    if (
      keys.includes('user') &&
      typeof newData.user === 'string' &&
      !newData.user.startsWith('v1/') &&
      !newData.user.startsWith('/v1/')
    ) {
      newData.user = `v1/users/${newData.user}`;
    }
    if (keys.includes('store')) {
      if (
        typeof newData.store === 'string' &&
        !newData.store.startsWith('v1/') &&
        !newData.store.startsWith('/v1/')
      ) {
        newData.store = `v1/stores/${newData.store}`;
      } else if (newData.store) {
        newData.store = `v1/stores/${newData.store.id}`;
      }
    }
    if (
      keys.includes('defaultBankAccount') &&
      typeof newData.defaultBankAccount === 'string' &&
      !newData.defaultBankAccount.startsWith('v1/') &&
      !newData.defaultBankAccount.startsWith('/v1/')
    ) {
      newData.defaultBankAccount = `v1/store_bank_accounts/${newData.defaultBankAccount}`;
    }
    if (keys.includes('product')) {
      if (
        typeof newData.product === 'string' &&
        !newData.product.startsWith('v1/') &&
        !newData.product.startsWith('/v1/')
      ) {
        newData.product = `v1/products/${newData.product}`;
      } else if (newData.product && typeof newData.product !== 'string') {
        newData.product = `v1/products/${newData.product.id}`;
      }
    }
    if (
      newData['@context'] !== '/v1/contexts/Store' &&
      keys.includes('address') &&
      typeof newData.address === 'string' &&
      !newData.address.startsWith('v1/') &&
      !newData.address.startsWith('/v1/')
    ) {
      newData.address = `v1/addresses/${newData.address}`;
    }
    return newData;
  }
  return data;
};
