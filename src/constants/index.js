import {Platform, Dimensions} from 'react-native';

export const COLOR_PRIMARY = '#FF576E';
export const COLOR_BORDER = '#F0F0F0';
export const COLOR_BLACK = '#515151';

const {width, height} = Dimensions.get('window');

export const IS_IPHONE_X =
  Platform.OS === 'ios' && (width >= 812 || height >= 812);
