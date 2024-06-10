import {ViewProps} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

import {AnimatedControllerContainer, AnimatedControllerText} from './styles';

interface ControllerProps extends ViewProps {
  value: SharedValue<string>;
}

export const Controller = ({value, ...props}: ControllerProps) => {
  return (
    <AnimatedControllerContainer {...props}>
      <AnimatedControllerText text={value} />
    </AnimatedControllerContainer>
  );
};
