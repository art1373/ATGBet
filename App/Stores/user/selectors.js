import {createSelector} from 'reselect';

export const currencySymbolSelector = () => '₺';

export const userIdSelector = createSelector(
  (state) => state.user.userId,
  (userId) => userId,
);

export const userSelector = createSelector(
  (state) => state.user.user,
  (user) => user,
);

export const userPermissonSelector = createSelector(
  (state) => state.user.userPermissions,
  (userPermissions) => userPermissions,
);

export const storeIdSelector = createSelector(
  (state) => state.user.storeId,
  (storeId) => storeId,
);

export const addressesSelector = createSelector(
  (state) => state.user.addresses,
  (addresses) => addresses,
);

export const referralsSelector = createSelector(
  (state) => state.user.referrals,
  (referrals) => referrals,
);

export const ordersSelector = createSelector(
  (state) => state.user.orders,
  (state) => state.user.ordersTotalCount,
  (orders, ordersTotalCount) => ({
    orders,
    ordersTotalCount,
  }),
);

export const cardsSelector = createSelector(
  (state) => state.user.cards,
  (state) => state.user.cardsTotalCount,
  (cards, cardsTotalCount) => ({
    cards,
    cardsTotalCount,
  }),
);

export const cardsTokenSelector = createSelector(
  (state) => state.secret,
  (secret) => ({
    secret,
  }),
);
