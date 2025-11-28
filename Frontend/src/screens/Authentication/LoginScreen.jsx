import { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import API from "../../services/api.js";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function LoginScreen({ navigation }) {
  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      loginUser(res.data.token, res.data.user);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={styles.logo}>ClientTracker</Text>
          <Text style={styles.subtitle}>Welcome back! Manage your clients with ease</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Login</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="your@email.com"
              placeholderTextColor="#A0A8D4"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0A8D4"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.linkText}>
              Don't have an account? <Text style={styles.linkBold}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          Secure login • Your data is encrypted
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B89D8",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    fontSize: 36,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#E8EBFF",
    textAlign: "center",
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E86",
    marginBottom: 24,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#5E6CA8",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F7FF",
    borderWidth: 1.5,
    borderColor: "#D4DCFC",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    color: "#2C3E86",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#5E6CA8",
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#5E6CA8",
    padding: 18,
    borderRadius: 12,
    shadowColor: "#5E6CA8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#D4DCFC",
  },
  dividerText: {
    color: "#A0A8D4",
    paddingHorizontal: 16,
    fontSize: 14,
  },
  linkButton: {
    paddingVertical: 12,
  },
  linkText: {
    color: "#7B89D8",
    textAlign: "center",
    fontSize: 15,
  },
  linkBold: {
    color: "#5E6CA8",
    fontWeight: "700",
  },
  footer: {
    textAlign: "center",
    color: "#E8EBFF",
    fontSize: 12,
    marginTop: 24,
  },
});