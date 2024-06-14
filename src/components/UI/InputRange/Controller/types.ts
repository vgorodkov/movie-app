import {ViewProps} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

export interface ControllerProps extends ViewProps {
  value: SharedValue<string>;
}
