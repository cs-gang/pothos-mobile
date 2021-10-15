import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

export default function Transactions() {
    return (
        <SafeAreaView>
            <View>
                <Text style={tw.style("text-black")}>Transaction</Text>
            </View>
        </SafeAreaView>
    )
}