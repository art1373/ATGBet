import {useOnceTranslations} from '../languages';
import {StyleSheet} from 'react-native';
import fontFamilies from '../../constants/fontFamilies';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const translationKeys = [
  'orderStatuses.10',
  'orderStatuses.20',
  'orderStatuses.21',
  'orderStatuses.30',
  'orderStatuses.40',
  'orderStatuses.50',
  'orderStatuses.51',
  'orderStatuses.52',
  'orderStatuses.53',
  'orderStatuses.54',
  'orderStatuses.60',
  'orderStatuses.70',
];

export default (order, isClient = true) => {
  const [
    status10,
    status20,
    status21,
    status30,
    status40,
    status50,
    status51,
    status52,
    status53,
    status54,
    status60,
    status70,
  ] = useOnceTranslations(translationKeys);

  if (!order) {
    return [];
  }
  switch (order.status) {
    case 10: {
      return [status10, '#fdca00', '#fffbdd'];
    }
    case 20: {
      return [status20, '#9aa09c', colors.whiteTwo];
    }
    case 21: {
      return [status21, '#d21a1a', '#ffe1e1'];
    }
    case 30: {
      return [status30, colors.coolGreen, '#dfffe6'];
    }
    case 40: {
      return [status40, colors.coolGreen, '#dfffe6'];
    }
    case 50: {
      return [status50, '#9aa09c', colors.whiteTwo];
    }
    case 51: {
      return [status51, colors.coolGreen, '#dfffe6'];
    }
    case 52: {
      return [status52, '#d21a1a', '#ffe1e1'];
    }
    case 53: {
      return [status53, '#d21a1a', '#ffe1e1'];
    }
    case 54: {
      return [status53, '#d21a1a', '#ffe1e1'];
    }
    case 60: {
      if (isClient) {
        return [status51, colors.coolGreen, '#dfffe6'];
      }
      return [status60, colors.coolGreen, '#dfffe6'];
    }
    case 70: {
      return [status70, '#d21a1a', '#ffe1e1'];
    }
    default: {
      return ['-_-', '#000', '#000'];
    }
  }
};
