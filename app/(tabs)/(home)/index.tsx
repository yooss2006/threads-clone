import { usePathname, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={{ color: pathname === "/" ? "red" : "black" }}>
              For You
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/following")}>
            <Text style={{ color: pathname === "/" ? "black" : "red" }}>
              Following
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push("/@zerocho/post/1")}>
          <Text>게시글 1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push("/@zerocho/post/2")}>
          <Text>게시글 2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push("/@zerocho/post/3")}>
          <Text>게시글 3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
  },
});
