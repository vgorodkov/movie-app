import {Typography} from '../Typography';
import {TypographyVariant} from '../Typography/types';
import {Backdrop} from './styles';

export const LoadingBackdrop = () => {
  return (
    <Backdrop>
      <Typography alightSelf="center" variant={TypographyVariant.LABEL_LARGE}>
        Loading...
      </Typography>
    </Backdrop>
  );
};
