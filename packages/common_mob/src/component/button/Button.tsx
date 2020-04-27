import React from 'react';
import { Button as RNEButton } from 'react-native-elements';
import { Color } from 'mango-common/src/util/Color';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}
export const Button: React.FC<Props> = (props) => {
  return (
    <RNEButton
      title={props.label}
      disabled={props.isDisabled || props.isLoading}
      loading={props.isLoading}
      onPress={props.onPress}
      containerStyle={props.containerStyle}
      disabledStyle={{ backgroundColor: 'gray' }}
      buttonStyle={[
        { backgroundColor: 'black', height: 50, borderRadius: 5 },
        props.style,
      ]}
    />
  );
};
