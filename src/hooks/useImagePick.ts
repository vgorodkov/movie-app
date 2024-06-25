import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {useAppDispatch} from '@/store/hooks';
import {showToast, ToastStatus} from '@/store/slices/toast';

export const useImagePick = () => {
  const dispatch = useAppDispatch();
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
        dispatch(
          showToast({
            status: ToastStatus.ERROR,
            content: err.message,
          }),
        );
      }
    }
  };
  return {imagePath, handleImagePick};
};
