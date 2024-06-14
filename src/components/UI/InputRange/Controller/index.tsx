import {AnimatedControllerContainer, AnimatedControllerText} from './styles';
import {ControllerProps} from './types';

export const Controller = ({value, ...props}: ControllerProps) => {
  return (
    <AnimatedControllerContainer {...props}>
      <AnimatedControllerText text={value} />
    </AnimatedControllerContainer>
  );
};
