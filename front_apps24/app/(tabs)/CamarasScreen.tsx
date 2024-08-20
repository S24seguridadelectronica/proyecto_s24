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
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Error al cargar los datos. Inténtalo de nuevo más tarde.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    if (!data) {
        return <Text>No hay datos disponibles</Text>;
    }

    return (
        <View>
            {Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => (
                    <Text key={index}>{JSON.stringify(item)}</Text>
                ))
            ) : (
                <Text>No hay datos disponibles</Text>
            )}
        </View>
    );
};

export default CamarasScreen;
