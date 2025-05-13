import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      {/* Tab Home */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />

      {/* Tab Profile */}
      <Tabs.Screen
        name="Explore"
        options={{
          title: 'Terapia',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="healing" size={24} color={color} />
          ),
        }}
      />

      {/* Tab Settings */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}