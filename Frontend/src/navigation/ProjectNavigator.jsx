import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectButtonScreen from "../screens/Projects/ProjectButtonScreen";

const Stack = createNativeStackNavigator();

function ProjectsList({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Projects Screen</Text>

            {/* Floating Action Button (FAB) */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('AddProject')}
                activeOpacity={0.8}
            >
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function ProjectNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProjectsList"
                component={ProjectsList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddProject"
                component={ProjectButtonScreen}
                options={{
                    title: "Add Project",
                    headerStyle: {
                        backgroundColor: '#5E6CA8', // Primary color for header
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // White background
    },
    text: {
        fontSize: 18,
        color: '#2C3E86', // Dark text on white bg
        padding: 20,
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#5E6CA8', // Primary button
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#2C3E86', // Darker shadow
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 8,
    },
    fabIcon: {
        fontSize: 32,
        color: '#FFFFFF',
        fontWeight: '300',
        lineHeight: 32,
    },
});
