import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import Carousel from 'react-native-snap-carousel'

export default function Transactions() {
    const Item = ({ item, index }) => {
        return (
            <View style={tw.style("bg-green-500 py-4 rounded shadow")}>
                <Text style={tw.style("text-black text-center text-xl")}>{item}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={tw.style("bg-green-600", { height: "100%", width: "100%" })}>
            <View style={tw.style("bg-green-800 py-4")}>
                <Carousel
                    data={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                    sliderWidth={410}
                    itemWidth={100}
                    renderItem={Item}
                    enableSnap={true}
                    loop={true}
                    enableMomentum={true} />
            </View>
        </SafeAreaView>
    )
}