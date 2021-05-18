import { Theme } from 'react-native-elements';
import { DefaultTheme } from '@react-navigation/native';

interface MyTheme extends Theme {
  colors: { [key: string]: string };
}

const colors = {
  ...DefaultTheme.colors,
  text: '#ffffff',
  primary: '#375a7f',
  background: '#222222',
  success: '#00bc8c',
  danger: '#E74C3C',
  grey0: '#adb5bd',
  warning: '#F39C12',
  info: '#3498DB',
  blue1: '#285584',
};

export const navTheme = {
  ...DefaultTheme,
  colors,
};

export const theme = {
  Text: {
    style: {
      color: colors.text,
      textAlign: 'center',
    },
  },
  ListItem: {
    titleStyle: {
      textAlign: 'left',
    },
    subtitleStyle: {
      color: colors.text,
      textAlign: 'left',
    },
    containerStyle: {
      backgroundColor: colors.background,
    },
    chevron: true,
    bottomDivider: true,
  },
  Input: {
    containerStyle: {
      backgroundColor: colors.text,
      marginVertical: 10,
      marginHorizontal: 20,
      width: 300,
      padding: 0,
    },
  },
  Card: {
    containerStyle: {
      backgroundColor: colors.background,
    },
    titleStyle: {
      color: colors.text,
    },
  },
  colors,
} as MyTheme;
