import { View } from "react-native";
import "../styles/global.css";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Layout() {
  return (
    < SafeAreaView >
      <Slot />
    </SafeAreaView >
  )
}
