import axios from '../../utils/axios';
import qs from 'qs';

const userRegisterApi = async ({name, surname, email, phone, password}) => {
  return await axios.post({
    name,
    surname,
    email,
    phone,
    password,
  });
};

export const fetchUser = async ({userId}) => {
  return await axios.get(`v1/users/${userId}`);
};

export const putUser = async (user) => {
  return await axios.put(`v1/users/${user.userId}`, user);
};

export const requestSms = async ({country, phone}) => {
  return await axios.post('v1/sms/code', {
    phone,
    countryCode: country,
  });
};

export const verifySmsCustomer = async ({phone, code, countryCode}) => {
  return await axios.post('v1/sms/verify', {
    phone,
    code,
    countryCode,
    refCode: null,
  });
};
export const verifySmsMerchant = async ({phone, code, countryCode}) => {
  return await axios.post('v1/sms/verify', {
    phone,
    code,
    type: 2,
    countryCode,
    refCode: null,
  });
};

export const addFavorite = async ({user, store}) => {
  return await axios.post('v1/favourites', {
    user,
    store,
  });
};

export const removeFavorite = async (favId) => {
  return await axios.delete(`v1/favourites/${favId}`);
};

export const getFavorite = async (userId) => {
  return await axios.get(`v1/users/${userId}/favourites`);
};
export const verifyUser = async (userId, nationalId) => {
  return await axios.post(`v1/users/${userId}/verify`, {
    nationalId,
  });
};

export const fetchPermissions = async ({userId}) => {
  return await axios.get(`v1/users/${userId}/permissions`);
};

export const putPermissions = async (userId, permissions) => {
  return await axios.put(`v1/users/${userId}/permissions`, permissions);
};

export const postAddress = async (address) => {
  return await axios.post('v1/addresses', address);
};

export const getAddresses = async (userId) => {
  return await axios.get(`v1/users/${userId}/addresses`);
};
export const deleteAddresses = async (addressId, userId) => {
  return await axios.get(`v1/users/${userId}/addresses`);
};

export const fetchReferrals = async (userId) => {
  return await axios.get(`v1/users/${userId}/referrals`);
};
export const getAllOrders = async () => {
  return await axios.get('/v1/user/orders');
};

export const getOrders = async (userId, status) => {
  return await axios.get(
    `/v1/users/${userId}/orders?${qs.stringify({status: status})}`,
  );
};
export const getOrdersWithNextUrl = async (url) => {
  return await axios.get(url);
};

export const getCards = async (userId) => {
  return await axios.get(`/v1/users/${userId}/cards`);
};

export const getCardsToken = async (userId) => {
  return await axios.get(`/v1/users/${userId}/cards/token`);
};

export const getUserReferrals = async (userId, type) => {
  return await axios.get(`/v1/users/${userId}/referrals?type=${type}`);
};

export const updateNotificationToken = async (userId, notificationToken) => {
  return await axios.post(`/v1/users/${userId}/device`, {
    notificationToken,
  });
};

export default {
  updateNotificationToken,
  userRegisterApi,
  fetchUser,
  putUser,
  requestSms,
  verifySmsCustomer,
  verifySmsMerchant,
  getFavorite,
  addFavorite,
  removeFavorite,
  verifyUser,
  fetchPermissions,
  putPermissions,
  postAddress,
  getAddresses,
  deleteAddresses,
  fetchReferrals,
  getAllOrders,
  getOrders,
  getUserReferrals,
  getCards,
  getCardsToken,
  getOrdersWithNextUrl,
};
