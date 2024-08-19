// front_apps24/app/(tabs)/index.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CamarasScreen from './CamarasScreen';  // Importa tu nuevo componente

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cámaras" component={CamarasScreen} />
            {/* Otras pantallas */}
        </Tab.Navigator>
    );
};

export default App;
