import {Typography, TypographyVariant} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {useAppSelector} from '@/store/hooks';
import {userSelector} from '@/store/slices/user/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

export const ProfileInformation = () => {
  const user = useAppSelector(userSelector);
  return (
    <FlexContainer gap={spacing.xs} alignItems="center">
      <Typography variant={TypographyVariant.TITLE_SMALL}>
        {user?.name ?? 'No name'} {user?.surname ?? 'No surname'}
      </Typography>
      <Typography variant={TypographyVariant.SUBTITLE_SMALL}>
        USER ID: {user?.uid}
      </Typography>
    </FlexContainer>
  );
};
