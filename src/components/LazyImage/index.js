import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {Small, Original} from './styles';

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad,
}) {
  const [loaded, setLoaded] = useState(false);
  const opacity = new Animated.Value(0);

  const OriginalAnimated = Animated.createAnimatedComponent(Original);
  useEffect(() => {
    if (shouldLoad) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [shouldLoad]);
  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode={'contain'}
      blurRadius={1}>
      {loaded && (
        <OriginalAnimated
          source={source}
          ratio={aspectRatio}
          onLoadEnd={handleAnimate}
          resizeMode="contain"
        />
      )}
    </Small>
  );
}
