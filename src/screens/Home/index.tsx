import auth from '@react-native-firebase/auth';

import {Button} from '@/components/UI/Button';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const HomeScreen = () => {
  const onLogOutBtnPress = () => {
    auth().signOut();
  };
  return (
    <FullscreenContainer>
      <Button onPress={onLogOutBtnPress}>Log out</Button>
    </FullscreenContainer>
  );
};
