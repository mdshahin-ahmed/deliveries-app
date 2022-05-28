import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { colors } from "../Theme/Colors";
import { spacing } from "../Theme/Spacing";
import { AntDesign } from "@expo/vector-icons";

export default function Details() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.img}
          source={require("../images/Media.png")}
        ></Image>
        <View></View>
        <Image
          style={styles.dots}
          source={require("../images/Dots.png")}
        ></Image>
        <View style={styles.main}>
          <Text style={styles.detailsHeading}>Boston Lettuce</Text>
          <View style={styles.priceWrap}>
            <Text style={styles.price}>1.10</Text>
            <Text style={styles.priceText}>€ / piece</Text>
          </View>

          <Text style={styles.grPrice}>~ 150 gr / piece</Text>
          <Text
            style={{
              marginTop: 32,
              fontWeight: 700,
              fontSize: 22,
              color: colors.purpleText,
            }}
          >
            Spain
          </Text>
          <Text style={styles.text}>
            Lettuce is an annual plant of the daisy family, Asteraceae. It is
            most often grown as a leaf vegetable, but sometimes for its stem and
            seeds. Lettuce is most often used for salads, although it is also
            seen in other kinds of food, such as soups, sandwiches and wraps; it
            can also be grilled.
          </Text>

          <View style={styles.cartWrap}>
            <View style={styles.loveButton}>
              {" "}
              <AntDesign name="hearto" size={24} color="black" />
            </View>
            <View style={styles.cartButton}>
              <AntDesign
                style={{ marginRight: spacing[4] }}
                name="shoppingcart"
                size={24}
                color="white"
              />
              ADD TO CART
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    zIndex: 0.1,
  },
  dots: {
    height: 8,
    marginTop: -40,
    width: 40,
    marginHorizontal: "auto",
    zIndex: 1,
  },
  main: {
    zIndex: 2,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: spacing[5],
  },
  detailsHeading: {
    fontWeight: 700,
    fontSize: 30,
    marginTop: spacing[9],
  },

  priceWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  price: {
    fontWeight: 700,
    fontSize: 32,
    marginRight: spacing[1],
  },
  priceText: {
    color: colors.normalText,
    fontWeight: 400,
    fontSize: 24,
  },
  grPrice: {
    color: colors.green,
    fontWeight: 500,
    fontSize: 17,
    marginTop: spacing[2],
  },
  text: {
    marginTop: spacing[4],
    color: colors.normalText,
    lineHeight: 25.5,
  },
  cartWrap: {
    flexDirection: "row",
    marginTop: 56,
    marginBottom: 65,
  },
  loveButton: {
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[5],
    borderWidth: 0.1,
    borderColor: colors.normalText,
    marginRight: spacing[5],
    borderRadius: spacing[3],
  },
  cartButton: {
    backgroundColor: colors.green,
    textAlign: "center",
    color: colors.white,
    fontWeight: 600,
    borderRadius: spacing[3],
    flexDirection: "row",
    width: 225,
    alignItems: "center",
    justifyContent: "center",
  },
});
