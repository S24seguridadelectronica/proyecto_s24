import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';

const CamarasScreen: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiUrl = 'https://proyectos24-production.up.railway.app/inventario/api/camaras/';
        
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        );
    }

    if (!data || data.length === 0) {
        return <Text>No data available</Text>;
    }

    return (
        <View>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
    );
};

export default CamarasScreen;
