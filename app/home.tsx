import React from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { useFetch } from "../hooks/useFetch";
import ItemCard from "../components/ItemCard";
import { useClickContext, ClickProvider } from "../components/ClickContext";
import { useSearchParams } from "expo-router/build/hooks";
import { Link } from "expo-router";

function HomeComponent() {

  const searchParams = useSearchParams();
  const username = searchParams.get('username');
  
  const { data: exercises, loading, error } = useFetch(
    "https://exercisedb-api.vercel.app/api/v1/muscles/upper%20back/exercises"
  );
  const { state, dispatch } = useClickContext();

  const handleItemClick = () => {
    dispatch({ type: "INCREMENT" });
  };

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
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.userNameStyle}>Welcome, {username}!</Text>
        <Link href="/login"><Text style={styles.logOutStyle}>Log Out</Text></Link>
      </View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.exerciseId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleItemClick}>
            <ItemCard exercise={item} />
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Text style={styles.header}>Upper Back Exercises</Text>
        }
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.buttonText}>Clicks: {state.count}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Home() {
  return (
    <ClickProvider>
      <HomeComponent />
    </ClickProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Adjust width as needed
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: "#E0F2F1",
  },
  logOutStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#0c706b",
    padding: 20,
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
    marginBottom: 10,
    color: "#00796B",
    paddingTop: 20,
  },
  userNameStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 0,
    color: "#00796B",
    padding: 20,
    backgroundColor: "#E0F2F1",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
