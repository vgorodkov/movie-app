import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {showToast} from '@/utils/showToast';

export const useImagePick = () => {
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
  return {imagePath, handleImagePick};
};
