import React, {Component} from 'react';
import {Text, View} from 'react-native';
import items from '../items-menu';

class Menu extends Component {
    render() {
        const {items} = this.props;
        const type = items.tipo;
        const day = new Date().getDate();

        return (
        <View>
            <View>
                <Text>{type ? 'Almoço': 'Janta'}</Text>
            </View>

            <View>
                <View>
                    <Text>{day}</Text>
                </View>
            </View>

            <View>
                <Text>Prato 1: {items.prato1} </Text>
                <Text>Prato 2: {items.prato2} </Text>
                <Text>Vegetariano: {items.vegetariano} </Text>
                <Text>Fast Grill: {items.fastGrill} </Text>
                <Text>Guarnição: {items.guarnicao} </Text>
                <Text>Sopa: {items.sopa} </Text>
                <Text>Salada: {items.salada} </Text>
                <Text>Sobremesa: {items.sobremesa} </Text>
                <Text>Suco: {items.suco} </Text>
            </View>
      </View>
        );
    }
}