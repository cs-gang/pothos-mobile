import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

export default function Options() {
    return (
        <SafeAreaView>
            <View>
                <Text style={tw.style("text-black")}>Options</Text>
            </View>
        </SafeAreaView>
    )
}