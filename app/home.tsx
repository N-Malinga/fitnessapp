import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from "react-native";

type Exercise = {
  exerciseId: string;
  name: string;
  gifUrl: string;
  instructions: string[];
  targetMuscles: string[];
  bodyParts: string[];
  equipments: string[];
  secondaryMuscles: string[];
};

export default function Home() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("https://exercisedb-api.vercel.app/api/v1/muscles/upper%20back/exercises");
        const json = await response.json();

        if (json.success) {
          // Correctly access the nested `exercises` array
          setExercises(json.data.exercises);
        } else {
          console.error("Failed to retrieve exercises.");
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const renderCard = ({ item }: { item: Exercise }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.gifUrl }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.label}>Target Muscles:</Text>
      <Text style={styles.text}>{item.targetMuscles.join(", ")}</Text>
      <Text style={styles.label}>Body Parts:</Text>
      <Text style={styles.text}>{item.bodyParts.join(", ")}</Text>
      <Text style={styles.label}>Equipment:</Text>
      <Text style={styles.text}>{item.equipments.join(", ")}</Text>
      <Text style={styles.label}>Secondary Muscles:</Text>
      <Text style={styles.text}>{item.secondaryMuscles.join(", ")}</Text>
      <Text style={styles.label}>Instructions:</Text>
      {item.instructions.map((instruction, index) => (
        <Text key={index} style={styles.text}>{instruction}</Text>
      ))}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Exercises...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={exercises}
      keyExtractor={(item) => item.exerciseId}
      renderItem={renderCard}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<Text style={styles.header}>Upper Back Exercises</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    color: "#555",
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
});
