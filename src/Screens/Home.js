import {
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Text from "../Components/Text/Text";
import { colors } from "../Theme/Colors";
import { View } from "react-native-web";

import { spacing } from "../Theme/Spacing";

export default function Home({ navigation }) {
  const detailsPage = () => {
    return navigation.navigate("Details");
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.banner}>
          <Image
            style={styles.logo}
            source={require("../images/LOGO.png")}
          ></Image>
        </View>
        <View style={styles.main}>
          <Image
            style={styles.icon}
            source={require("../images/Icon.png")}
          ></Image>
          <Text style={styles.h1}>None-Contact Deliveries</Text>
          <Text style={styles.text}>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>
        </View>
        <Pressable onPress={detailsPage} style={styles.orderButton}>
          ORDER NOW
        </Pressable>
        <Text style={styles.dismiss}>DISMISS</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.purple,
    height: 312,
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: 63,
    marginLeft: spacing[1],
  },
  main: {
    marginTop: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#F6F5F5",
  },
  icon: {
    height: 104,
    width: 104,
    marginTop: 64,
    marginHorizontal: "auto",
  },
  h1: {
    fontWeight: 700,
    textAlign: "center",
    marginHorizontal: spacing[12],
    marginTop: spacing[6],
    fontSize: 34,
  },
  text: {
    color: colors.normalText,
    marginHorizontal: spacing[5],
    lineHeight: spacing[4],
    textAlign: "center",
    marginTop: spacing[4],
  },
  orderButton: {
    backgroundColor: colors.green,
    marginHorizontal: spacing[5],
    textAlign: "center",
    color: colors.white,
    paddingVertical: spacing[4],
    fontWeight: 600,
    marginTop: spacing[8],
    borderRadius: spacing[3],
  },
  dismiss: {
    color: colors.normalText,
    marginTop: spacing[7],
    textAlign: "center",
    marginBottom: 54,
  },
});
