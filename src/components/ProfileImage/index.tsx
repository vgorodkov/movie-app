import {useState} from 'react';
import {Pressable} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {showToast} from '@/utils/showToast';

import {Avatar} from './styles';

export const ProfileImage = () => {
  const [imagePath, setImagePath] = useState<null | string>(null);
  const handleImagePick = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 150,
        height: 150,
        cropping: true,
      });
      setImagePath(image.path);
    } catch (err) {
      if (err instanceof Error) {
        showToast(err.message);
      }
    }
  };
  return (
    <Pressable onPress={handleImagePick}>
      {imagePath ? (
        <Avatar source={{uri: imagePath}} />
      ) : (
        <Avatar source={require('@/assets/icons/user-profile-icon.png')} />
      )}
    </Pressable>
  );
};
