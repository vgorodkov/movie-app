import {Pressable} from 'react-native';

import AvatarIcon from '@/assets/icons/user-profile-icon.svg';
import {useImagePick} from '@/hooks/useImagePick';

import {Avatar} from './styles';

export const ProfileImage = () => {
  const {imagePath, handleImagePick} = useImagePick();
  return (
    <Pressable onPress={handleImagePick}>
      {imagePath ? <Avatar source={{uri: imagePath}} /> : <AvatarIcon />}
    </Pressable>
  );
};
