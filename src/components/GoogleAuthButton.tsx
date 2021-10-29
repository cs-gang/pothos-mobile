import { Function } from '@babel/types';
import React, { FC } from 'react'
import { View, Text, FlatList, ListRenderItem } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Button from './Button'

export default function GoogleAuthButton() {
    return (
        <Button text="Sign In" action={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
    )
}

async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}