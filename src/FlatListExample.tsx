import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

    interface Item{
        id: string;
        nome: string;
        idade: string;
        email: string;
    }

    const dados: Item[] =[
        {id: "1" , nome: "Lina" , idade: "16", email: "lilina@teste.com"},
        {id: "2" , nome: "Lara", idade: "18", email: "Lara@teste.com"},
        {id: "3" , nome: "Mia", idade: "15", email: "Mia@teste.com"},
        {id: "4" , nome: "Ana", idade: "25", email: "Ana@teste.com"},
        {id: "5" , nome: "Nana", idade: "32", email: "Nana@teste.com"},
        {id: "6" , nome: "Esther", idade: "19", email: "Esther@teste.com"},
        {id: "7" , nome: "Mina", idade: "21", email: "Mina@teste.com"},
        {id: "8" , nome: "Lia", idade: "14", email: "Liaa@teste.com"},
        {id: "9" , nome: "Julia", idade: "16", email: "Jubs@teste.com"},
        {id: "10" , nome: "Vivi", idade: "20", email: "Vivi@teste.com"},
        {id: "11" , nome: "Clara", idade: "30", email: "Clara@teste.com"},
        {id: "12" , nome: "Nina", idade: "21", email: "Nina@teste.com"},
        

    ];


    const renderItem = ({item}: {item : Item} ) => (
        <TouchableOpacity style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.idade}</Text>
            <Text>{item.email}</Text>
        </TouchableOpacity>
    );

    

function FlatListExample(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#e0aaff" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
                data={dados}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id}
            />
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                    source={require('./assets/images/home.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('./assets/images/orders.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/profile.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    header: {
        backgroundColor: '#e0aaff',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
      borderTopWidth: 0.2,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10  
    },
    footerIcon: {
        width: 30,
        height: 30
    }
});

export default FlatListExample;