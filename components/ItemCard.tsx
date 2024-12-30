import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Exercise = {
  name: string;
  gifUrl: string;
  instructions: string[];
  targetMuscles: string[];
  bodyParts: string[];
  equipments: string[];
  secondaryMuscles: string[];
};

type ItemCardProps = {
  exercise: Exercise;
};

const ItemCard: React.FC<ItemCardProps> = ({ exercise }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: exercise.gifUrl }} style={styles.image} />
      <Text style={styles.name}>{exercise.name}</Text>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.label}>Target Muscles:</Text>
        <Text style={styles.text}>{exercise.targetMuscles.join(", ")}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Body Parts:</Text>
        <Text style={styles.text}>{exercise.bodyParts.join(", ")}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Equipment:</Text>
        <Text style={styles.text}>{exercise.equipments.join(", ")}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Secondary Muscles:</Text>
        <Text style={styles.text}>{exercise.secondaryMuscles.join(", ")}</Text>
      </View>
      {/* <View style={styles.section}>
        <Text style={styles.label}>Instructions:</Text>
        {exercise.instructions.map((instruction, index) => (
          <Text key={index} style={styles.instruction}>
            {index + 1}. {instruction}
          </Text>
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E0F7FA", // Light teal background
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#26C6DA",
    marginHorizontal: 30,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00796B", // Dark teal
    textAlign: "center",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#004D40", // Darker teal
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 5,
    lineHeight: 20,
  },
  instruction: {
    fontSize: 14,
    color: "#444444",
    marginBottom: 5,
    lineHeight: 18,
  },
});

export default ItemCard;
