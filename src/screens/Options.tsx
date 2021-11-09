import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

import GoogleAuthButton from '../components/GoogleAuthButton';

export default function Options() {
    return (
        <SafeAreaView style={tw.style("bg-green-600", { height: "100%", width: "100%" })}>
            <View>
                <Text style={tw.style("text-black")}>Options</Text>
            </View>
            <GoogleAuthButton />
        </SafeAreaView>
    )
}