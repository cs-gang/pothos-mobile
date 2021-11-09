import { Function } from '@babel/types';
import React, { FC } from 'react'
import { View, Text, FlatList, ListRenderItem } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

interface BarProps {
    data: any[],
    renderItem: ListRenderItem<any>
}

export default function FocusListBar({ data, renderItem }: BarProps) {

    return (<FlatList data={data} renderItem={renderItem} horizontal={true} />
    )
}