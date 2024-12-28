import React from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const { data: exercises, loading, error } = useFetch(
    "https://exercisedb-api.vercel.app/api/v1/muscles/upper%20back/exercises"
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading Exercises...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={exercises}
      keyExtractor={(item) => item.exerciseId}
      renderItem={({ item }) => <ItemCard exercise={item} />}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <Text style={styles.header}>Upper Back Exercises</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f4f4f8",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#00796B", // Dark teal
    paddingTop: 40, // Added padding to prevent overlap with the phone's top section
  },
});
