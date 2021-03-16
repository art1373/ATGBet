import {
  REQUEST_SMS,
  VERIFY_SMS_MERCHANT,
  VERIFY_SMS,
  FETCH_USER,
  SET_USER,
  PUT_USER,
  SET_USER_ID,
  VERIFY_USER,
  FETCH_PERMISSIONS,
  PUT_PERMISSIONS,
  POST_ADDRESS,
  FETCH_ADDRESSES,
  SET_STORE_ID,
  SET_ADDRESSES,
  DELETE_ADDRESS,
  LOGOUT,
  SET_USER_PERMISSIONS,
  FETCH_REFERRALS,
  SET_REFERRALS,
  GET_CARDS,
  SET_CARDS,
  SET_USER_FIELD,
  UPLOAD_PROFILE_PHOTO,
  ADD_PHOTO_TO_PROFILE,
  GET_CARDS_TOKEN,
  SET_CARDS_TOKEN,
  GET_ORDERS_ACTIVE,
  GET_ORDERS,
  SET_ORDERS,
  UPDATE_NOTIFICATION_TOKEN,
} from './constants';
import {ADD_PHOTO_TO_STORE_PRODUCT} from '../storeProduct/constants';

export const requestSmsAction = (country, phone, onSuccess, onFailure) => {
  return {
    type: REQUEST_SMS,
    country,
    phone,
    onSuccess,
    onFailure,
  };
};

export const verifySmsAction = (
  phone,
  code,
  countryCode,
  isMerchant,
  onSuccess,
  onFailure,
) => {
  return {
    type: VERIFY_SMS,
    phone,
    code,
    countryCode,
    isMerchant,
    onSuccess,
    onFailure,
  };
};

export const fetchUserAction = (userId, onFailure) => {
  return {
    userId,
    type: FETCH_USER,
    onFailure,
  };
};

export const setUserAction = (user) => {
  return {
    user,
    type: SET_USER,
  };
};

export const putUserAction = (user, onSuccess, onFailure) => {
  return {
    user,
    type: PUT_USER,
    onSuccess,
    onFailure,
  };
};

export const fetchAddressesAction = () => {
  return {
    type: FETCH_ADDRESSES,
  };
};

export const setAddressesAction = (addresses) => {
  return {
    type: SET_ADDRESSES,
    addresses,
  };
};

export const postAddressAction = (address, onSuccess, onFailure) => {
  return {
    address,
    type: POST_ADDRESS,
    onSuccess,
    onFailure,
  };
};

export const deleteAddressAction = (address, onSuccess, onFailure) => {
  return {
    address,
    onSuccess,
    onFailure,
    type: DELETE_ADDRESS,
  };
};

export const setUserIdAction = (userId) => {
  return {
    userId,
    type: SET_USER_ID,
  };
};
export const verifyUserAction = (nationalId, onSuccess, onFailure) => {
  return {
    type: VERIFY_USER,
    nationalId,
    onSuccess,
    onFailure,
  };
};

export const setStoreIdAction = (storeId) => {
  return {
    storeId,
    type: SET_STORE_ID,
  };
};

export const setUserPermissionsAction = (userPermissions) => {
  return {
    userPermissions,
    type: SET_USER_PERMISSIONS,
  };
};

export const fetchPermissionsAction = (onSuccess, onFailure) => {
  return {
    type: FETCH_PERMISSIONS,
    onSuccess,
    onFailure,
  };
};

export const setReferralsAction = (referrals) => {
  return {
    referrals,
    type: SET_REFERRALS,
  };
};

export const fetchReferralsAction = (onSuccess, onFailure) => {
  return {
    type: FETCH_REFERRALS,
    onSuccess,
    onFailure,
  };
};

export const putPermissionsAction = (permissions, onSuccess, onFailure) => {
  return {
    permissions,
    type: PUT_PERMISSIONS,
    onSuccess,
    onFailure,
  };
};

export const logoutAction = (onSuccess, onFailure) => {
  return {
    type: LOGOUT,
    onSuccess,
    onFailure,
  };
};

export const getCardsAction = (onSuccess, onFailure) => ({
  type: GET_CARDS,
  onSuccess,
  onFailure,
});

export const setCardsAction = (cards, cardsTotalCount) => ({
  type: SET_CARDS,
  cards,
  cardsTotalCount,
});

export const getCardsTokenAction = (onSuccess, onFailure) => ({
  type: GET_CARDS_TOKEN,
  onSuccess,
  onFailure,
});

export const setCardsTokenAction = (secret) => ({
  type: SET_CARDS_TOKEN,
  secret,
});

export const setUserInfoFieldAction = (fieldName, fieldValue) => {
  return {
    type: SET_USER_FIELD,
    fieldName,
    fieldValue,
  };
};
export const uploadProfilePhoto = (base64) => {
  return {
    type: UPLOAD_PROFILE_PHOTO,
    base64,
  };
};

export const addPhotoToProfile = (userId, photoUrl) => {
  return {
    type: ADD_PHOTO_TO_PROFILE,
    userId,
    photoUrl,
  };
};

export const updateNotificationTokenAction = () => {
  return {type: UPDATE_NOTIFICATION_TOKEN};
};
