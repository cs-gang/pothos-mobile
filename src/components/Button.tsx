import React from "react";
import { Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Button(props) {
    return (
        <Pressable
            onPress={props.action}
            style={({ pressed }) => [
                tw.style("py-2 px-4 shadow-xl rounded-xl my-2", pressed ? "bg-blue-600" : "bg-blue-500", props.extraStyle)
            ]}>
            <Text style={tw.style("text-xl text-white text-center", props.extraTextStyle, { fontFamily: "WorkSans_600SemiBold" })}>{props.text}</Text>
        </Pressable>
    )
}
