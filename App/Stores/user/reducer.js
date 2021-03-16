import {
  initialState,
  SET_USER_ID,
  VERIFY_USER,
  SET_STORE_ID,
  SET_ADDRESSES,
  SET_USER,
  SET_USER_PERMISSIONS,
  SET_REFERRALS,
  SET_ORDERS,
  SET_USER_FIELD,
  SET_CARDS,
  ADD_PHOTO_TO_PROFILE,
  SET_CARDS_TOKEN,
} from './constants';
import update from 'immutability-helper';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.user};
    case SET_USER_ID:
      return {...state, userId: action.userId};
    case SET_USER_FIELD: {
      return update(state, {
        user: {[action.fieldName]: {$set: action.fieldValue}},
      });
    }
    case VERIFY_USER:
      return {
        ...state,
        isVerified: true,
      };
    case SET_STORE_ID:
      return {...state, storeId: action.storeId};
    case SET_ADDRESSES:
      return {...state, addresses: action.addresses};
    case SET_USER_PERMISSIONS:
      return {...state, userPermissions: action.userPermissions};
    case SET_REFERRALS:
      return {...state, referrals: action.referrals};
    case SET_ORDERS: {
      return {
        ...state,
        orders: action.orders,
        ordersTotalCount: action.ordersTotalCount,
      };
    }
    case SET_CARDS: {
      return {
        ...state,
        cards: action.cards,
        cardsTotalCount: action.cardsTotalCount,
      };
    }
    case SET_CARDS_TOKEN: {
      return {
        ...state,
        secret: action.secret,
      };
    }
    case ADD_PHOTO_TO_PROFILE: {
      const {photoUrl} = action;
      if (state.user) {
        return update(state, {
          user: {
            profilePhoto: {$set: photoUrl},
          },
        });
      }
      break;
    }
  }
  return state;
};
