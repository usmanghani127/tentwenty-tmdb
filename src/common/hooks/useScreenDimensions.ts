import {useEffect, useState} from 'react';
import {
  Dimensions,
  PixelRatio,
  StatusBar,
  useWindowDimensions,
} from 'react-native';

export const useScreenDimensions = () => {
  const windowDimensions = useWindowDimensions();
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get('screen'),
  );

  const statusBarHeight = StatusBar.currentHeight || 0;
  const navBarHeight =
    screenDimensions.height - windowDimensions.height - statusBarHeight;
  const isLandScape = screenDimensions.width > screenDimensions.height;
  const pixelDensity = PixelRatio.get();

  useEffect(() => {
    const dimensionsListener = Dimensions.addEventListener(
      'change',
      ({screen}) => {
        setScreenDimensions(screen);
      },
    );

    return () => {
      dimensionsListener.remove();
    };
  }, []);

  return {
    ...screenDimensions,
    navBarHeight,
    isLandScape,
    pixelDensity,
    smallerDimension: Math.min(screenDimensions.width, screenDimensions.height),
    largerDimension: Math.max(screenDimensions.width, screenDimensions.height),
  };
};
