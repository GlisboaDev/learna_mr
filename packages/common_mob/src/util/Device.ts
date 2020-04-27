import { Platform, Dimensions } from 'react-native';

export const Device = {
  isIOS: Platform.select({ ios: true, android: false }),
  size: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
};
