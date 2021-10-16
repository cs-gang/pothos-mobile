import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

export default function Transactions() {
    return (
        <SafeAreaView style={tw.style("bg-green-600", { height: "100%", width: "100%" })}>
            <View>
                <Text style={tw.style("text-black")}>Transaction</Text>
            </View>
        </SafeAreaView>
    )
}