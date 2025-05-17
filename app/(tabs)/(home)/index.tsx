import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = false;

  const { width, height } = Dimensions.get("window");
  console.log(`화면너비: ${width}dp, 화면높이: ${height}dp`);

  console.log(
    `화면 너비: ${width * PixelRatio.get()}px, 높이: ${
      height * PixelRatio.get()
    }px`
  );

  return (
    <SafeAreaView style={styles.container}>
      <BlurView intensity={70} style={styles.header}>
        <Image
          source={require("../../../assets/images/react-logo.png")}
          style={styles.headerLogo}
        />
        {!isLoggedIn && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      {isLoggedIn && (
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
      )}
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
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  headerLogo: {
    width: 42, //dp, dip
    height: 42,
  },
  loginButton: {
    position: "absolute",
    right: 20,
    top: 0,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "white",
  },
});
