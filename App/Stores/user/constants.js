import AsyncStorage from '@react-native-community/async-storage';

export const initialState = {
  user: null,
  userPermissions: null,
  userId: null,
  storeId: null,
  referrals: null,
  addresses: null,
  waitingForApproveOrders: null,
};

export const REQUEST_SMS = '@USER_REQUEST_SMS';
// export const VERIFY_SMS_CUSTOMER = '@USER_VERIFY_SMS_CUSTOMER';
export const VERIFY_SMS = '@USER_VERIFY_SMS_MERCHANT';
export const SET_USER_ID = '@USER_SET_USER_ID';
export const SET_STORE_ID = '@USER_SET_STORE_ID';
export const SET_USER_FIELD = '@STORE_SET_USER_FIELD';
export const UPDATE_NOTIFICATION_TOKEN = '@STORE_UPDATE_NOTIFICATION_TOKEN';

export const SET_USER_PERMISSIONS = '@SET_USER_PERMISSIONS';
export const SET_REFERRALS = '@SET_REFERRALS';

export const FETCH_USER = '@USER_FETCH';
export const PUT_USER = '@USER_PUT';
export const SET_USER = '@USER_SET';
export const VERIFY_USER = '@VERIFY_USER';
export const FETCH_PERMISSIONS = '@PERMISSIONS_FETCH';
export const FETCH_REFERRALS = '@FETCH_REFERRALS';
export const PUT_PERMISSIONS = '@PERMISSIONS_PUT';
export const POST_ADDRESS = '@ADDRESS_POST';
export const FETCH_ADDRESSES = '@ADDRESSES_FETCH';
export const SET_ADDRESSES = '@ADDRESSES_SET';
export const DELETE_ADDRESS = '@ADDRESS_DELETE';
export const UPLOAD_PROFILE_PHOTO = '@PROFILE_PHOTO_UPLOAD';
export const ADD_PHOTO_TO_PROFILE = '@ADD_PHOTO_TO_PROFILE';
export const LOGOUT = '@USER_LOGOUT';
export const GET_CARDS = '@USER_GET_CARDS';
export const SET_CARDS = '@USER_SET_CARDS';
export const GET_CARDS_TOKEN = '@USER_GET_CARDS_TOKEN';
export const SET_CARDS_TOKEN = '@USER_SET_CARDS_TOKEN';
