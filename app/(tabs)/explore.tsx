import { StyleSheet, Image, Platform, Button } from "react-native";
// import { Select } from "native-base";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";
import DropdownComponent from "@/components/Dropdown";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const [service, setService] = useState();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/muscle-man-lifting-weights.jpg")}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Workouts</ThemedText>
      </ThemedView>
      <ThemedText>Choose a previous workout or create a new one</ThemedText>
      <Link href={"/workouts"} asChild>
        <Button
          // onPress={}
          title="Enter a Workout"
          color="red"
          accessibilityLabel="Enter a new workout"
        />
      </Link>
      <Button
        // onPress={}
        title="Existing Workouts"
        color="grey"
        accessibilityLabel="Enter a new workout"
      />
      <Button
        // onPress={}
        title="Workout Plans"
        color="blue"
        accessibilityLabel="Enter a new workout"
      />
      <DropdownComponent />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
