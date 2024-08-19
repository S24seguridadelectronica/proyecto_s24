import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

const CamarasScreen: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // URL de tu API
        const apiUrl = 'https://proyectos24-production.up.railway.app/inventario/api/camaras';

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
        return <ActivityIndicator style={styles.loading} />;
    }

    if (data.length === 0) {
        return <Text style={styles.noData}>No data available</Text>;
    }

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Nombre: {item.nombre}</Text>
            <Text style={styles.itemText}>Modelo: {item.modelo}</Text>
            <Text style={styles.itemText}>Número de Serie: {item.numero_serie}</Text>
            <Text style={styles.itemText}>Ubicación: {item.ubicacion}</Text>
            <Text style={styles.itemText}>Fecha de Instalación: {item.fecha_instalacion}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    item: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#666',
    },
});

export default CamarasScreen;
