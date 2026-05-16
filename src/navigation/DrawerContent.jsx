import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Share2, LogOut, Coins } from 'lucide-react-native';
import { useThemeColor } from 'heroui-native';

export default function CustomDrawer(props) {
  const [fg, danger, muted] = useThemeColor(['foreground', 'danger', 'muted']);
  return (
    <View className="flex-1 bg-accent">
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* ── Header ── */}
        <View className="px-5 pt-10 pb-6">
          <Text className="text-accent-foreground text-lg font-bold mb-1">
            John Doe
          </Text>

          <View className="flex-row items-center gap-1.5">
            <Text className="text-accent-foreground/80 text-sm font-medium">
              280 Coins
            </Text>
            <Coins size={13} color="rgba(255,255,255,0.8)" />
          </View>
        </View>

        {/* ── Nav Items ── */}
        <View className="flex-1 pt-2">
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* ── Footer ── */}
      <View className="px-5 pb-8 pt-3 border-t border-border">

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.7}
          className="flex-row items-center gap-3 py-3.5"
        >
          <Share2 size={20} color={fg} />
          <Text className="text-foreground text-sm font-semibold flex-1">
            Tell a Friend
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.7}
          className="flex-row items-center gap-3 py-3.5"
        >
          <LogOut size={20} color={danger} />
          <Text className="text-danger text-sm font-semibold flex-1">
            Sign Out
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}