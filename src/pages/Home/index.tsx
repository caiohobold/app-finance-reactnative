import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "@/src/components/Header";
import Balance from "@/src/components/Balance";
import Movements from "@/src/components/Movements";
import Actions from "@/src/components/Actions"

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '20/09/2024',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '2.500,90',
        date: '17/09/2024',
        type: 1 //receitas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '22/09/2024',
        type: 1 //receitas
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Caio Hobold"/>
            <Balance saldo="9.250,00" gastos="-527,00"/>

            <Actions/>

            <Text style={styles.title}>Últimas movimentações</Text>
            
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Movements data={item}/>}
            />
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})