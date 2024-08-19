import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getCamaras } from './api';

interface Camara {
    id: number;
    nombre: string;
    modelo: string;
    numero_serie: string;
    ubicacion: string;
    fecha_instalacion: string;
}

const CamarasScreen = () => {
    const [camaras, setCamaras] = useState<Camara[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCamaras()
            .then(response => {
                setCamaras(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar los datos', error);
                setError('Error al cargar los datos');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Text>Cargando...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <View>
            {camaras.length > 0 ? (
                camaras.map(camara => (
                    <Text key={camara.id}>{camara.nombre} - {camara.modelo} - {camara.numero_serie}</Text>
                ))
            ) : (
                <Text>No hay cámaras disponibles</Text>
            )}
        </View>
    );
};

export default CamarasScreen;
