import {useEffect, useState} from 'react';
import {getColors, ImageColorsResult} from 'react-native-image-colors';
import {useTheme} from 'styled-components';

export const useImageColors = (
  img: string,
): {colors: ImageColorsResult | null; isLoading: boolean} => {
  const theme = useTheme();
  const [colors, setColors] = useState<null | ImageColorsResult>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getColors(img, {
      fallback: theme.colors.background,
      cache: true,
    })
      .then(setColors)
      .finally(() => {
        setIsLoading(false);
      });
  }, [img, theme.colors.background]);

  return {colors, isLoading};
};
