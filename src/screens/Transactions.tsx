import React from 'react'
import { View, Text, TextInput } from 'react-native'
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
            <View style={tw.style("mt-2 py-2 bg-green-900")}>
                <Text style={tw.style("text-base text-gray-300 font-bold text-center")}>Transactions </Text>
            </View>

            <View style={tw.style("")}>
                <TextInput style={tw.style("text-center text-gray-300 border-4 border-green-900 p-2 m-2 rounded-xl")} placeholder="Search with keywords" />
            </View>

            <View style={tw.style("bg-green-900 mx-2", { height: "100%" })}>

            </View>

            <View style={tw.style("bg-green-800 py-4 absolute bottom-0")}>
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