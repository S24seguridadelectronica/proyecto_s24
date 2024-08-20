import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CamarasScreen from './CamarasScreen';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Cámaras" component={CamarasScreen} />
                {/* Otras pantallas */}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
