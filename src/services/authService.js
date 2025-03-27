export const loginUser = async (email, password) => {
    // Mock API request (Replace with actual backend call)
    if (email === "admin@example.com" && password === "password") {
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };
  