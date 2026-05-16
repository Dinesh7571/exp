import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Uniwind } from 'uniwind';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ onLogin }: { onLogin?: () => void }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const pandaSlide = useRef(new Animated.Value(-40)).current;
  const scaleBtn = useRef(new Animated.Value(1)).current;
  const [theme, setTheme] = useState('ocean-light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    Uniwind.setTheme(newTheme);
    setTheme(newTheme);
};
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, tension: 60, friction: 10, useNativeDriver: true }),
      Animated.spring(pandaSlide, { toValue: 0, tension: 50, friction: 9, delay: 250, useNativeDriver: true }),
    ]).start();
  }, []);


  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" />

      {/* ── Hero orange card ── */}
      <View className="bg-pink-600 rounded-b-[36px] overflow-hidden items-center justify-end" style={{ height: '62%' }}>

        {/* Cloud left */}
        <View className="absolute top-14 -left-4 opacity-30">
          <View className="w-40 h-11 bg-orange-400 rounded-full" />
          <View className="absolute -top-5 left-4 w-11 h-11 bg-orange-400 rounded-full" />
          <View className="absolute -top-7 left-14 w-14 h-14 bg-orange-400 rounded-full" />
          <View className="absolute -top-5 left-24 w-10 h-10 bg-orange-400 rounded-full" />
        </View>

        {/* Cloud right */}
        <View className="absolute top-12 -right-6 opacity-30">
          <View className="w-36 h-10 bg-orange-400 rounded-full" />
          <View className="absolute -top-4 left-3 w-10 h-10 bg-orange-400 rounded-full" />
          <View className="absolute -top-6 left-12 w-12 h-12 bg-orange-400 rounded-full" />
          <View className="absolute -top-4 left-20 w-9 h-9 bg-orange-400 rounded-full" />
        </View>

        {/* Sparkles */}
        <Text className="absolute text-white text-2xl font-bold" style={{ top: 18, left: width * 0.47 }}>✦</Text>
        <Text className="absolute text-white text-base opacity-80" style={{ top: 80, left: width * 0.1 }}>✦</Text>
        <Text className="absolute text-white text-sm opacity-70" style={{ top: 105, right: width * 0.12 }}>✦</Text>
        <Text className="absolute text-white text-xs opacity-60" style={{ top: 200, left: width * 0.22 }}>✦</Text>
        <Text className="absolute text-white text-sm opacity-65" style={{ top: 225, right: width * 0.1 }}>+</Text>
        <Text className="absolute text-white text-xs opacity-55" style={{ top: 310, right: width * 0.25 }}>✦</Text>

        <Animated.View
          className="absolute  bottom-30 z-10"
          style={{ opacity: fadeAnim, transform: [{ translateX: pandaSlide }] }}
        >
          <LottieView
            source={require('../assets/tinyaPanda.json')}
            autoPlay
            loop
            style={{ width: 350, height: 350 }}
          />
        </Animated.View>
      </View>

      {/* ── Bottom content ── */}
      <Animated.View
        className="flex-1 px-7 pt-7 pb-4 justify-between"
        style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
      >
        <View>
          <Text className="text-[34px] font-extrabold text-foreground leading-tight tracking-tight">
            Earn rewards for{'\n'}every step you take.
          </Text>
          <Text className="text-[15px] text-gray-500 mt-3 leading-relaxed">
            More than tracking — transform{'\n'}walking into winning.
          </Text>
        </View>

        <Animated.View style={{ transform: [{ scale: scaleBtn }] }}>
          <TouchableOpacity
            className="bg-accent rounded-full py-[18px] items-center"
            activeOpacity={1}
            onPressIn={() => Animated.spring(scaleBtn, { toValue: 0.96, useNativeDriver: true }).start()}
            onPressOut={() => Animated.spring(scaleBtn, { toValue: 1, useNativeDriver: true }).start()}
            onPress={toggleTheme}
          >
            <Text className="text-white text-[17px] font-semibold tracking-wide">Log in</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* Home bar */}
      <View className="self-center w-32 h-1 bg-gray-900 opacity-20 rounded-full mb-2" />
    </View>
  );
}