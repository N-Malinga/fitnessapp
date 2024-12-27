import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  username: string;
  password: string;
};

export const registerUser = async (username: string, password: string): Promise<string | null> => {
  try {
    const usersString = await AsyncStorage.getItem("users");
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    if (users.find((user) => user.username === username)) {
      return "Username already exists.";
    }

    users.push({ username, password });
    await AsyncStorage.setItem("users", JSON.stringify(users));

    return null;
  } catch (error) {
    return "Error registering user.";
  }
};

export const loginUser = async (username: string, password: string): Promise<string | null> => {
  try {
    const usersString = await AsyncStorage.getItem("users");
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
      return "Invalid username or password.";
    }

    return null;
  } catch (error) {
    return "Error logging in.";
  }
};
