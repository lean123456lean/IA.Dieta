import {
  View,
  StyleSheet,
  Pressable,
  Text,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";

import { Feather } from '@expo/vector-icons'
import { colors } from '../../constants/Colors'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';


interface HeaderProps {
  step: string;
  title: string;
}

export function Header({ step, title }: HeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Pressable onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>
          

          <Text style={styles.text}>
            {step} <MaterialIcons name="autorenew" size={16} color="#000" />
          </Text>
        </View>

        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    marginBottom: 14,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.background
  }
})