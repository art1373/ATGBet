import {useMemo} from 'react';
import {getCurrentLanguage} from '../languages';

export const getProductName = (product) => {
  let translation =
    product &&
    product.translations &&
    product.translations.find((item) => item.locale === getCurrentLanguage());
  if (!translation) {
    translation =
      product &&
      product.translations &&
      product.translations.length > 0 &&
      product.translations[0];
  }
  const name = translation ? translation.name : product.name;
  return name;
};

export default (product) => {
  return useMemo(() => {
    return getProductName(product);
  }, [product]);
};
