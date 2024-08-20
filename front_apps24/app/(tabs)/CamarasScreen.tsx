import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const CamarasScreen: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // URL de tu API
        const apiUrl = 'http://127.0.0.1:8000/inventario/api/camaras/';

        // Hacer la solicitud
        fetch(apiUrl)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    // Asegúrate de que los datos estén disponibles y no sean una promesa
    if (!data) {
        return <Text>No data available</Text>;
    }

    return (
        <View>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};

export default CamarasScreen;
