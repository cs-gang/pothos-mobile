import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames'

export default function Dashboard() {
    return (
        <SafeAreaView style={tw.style("bg-green-600", { height: "100%", width: "100%" })}>
            <View style={tw.style("mx-auto mt-10 p-4 px-16 rounded-lg border-4 border-gray-800 bg-green-800")}>
                <Text style={tw.style("text-3xl text-center text-yellow-300")}>Balance: 9000$</Text>
                <Text style={tw.style("text-lg text-center mt-2 text-green-400")}>Total Earned: 10000$</Text>
                <Text style={tw.style("text-lg text-center text-green-400")}>Total Spent: 1000$</Text>
            </View>
        </SafeAreaView>
    )
}