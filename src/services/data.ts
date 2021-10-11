import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

interface UserData {
  username?: string;
  transactions: FirebaseFirestoreTypes.CollectionReference;
}

export async function getUserData(uid: string): Promise<UserData | undefined> {
  // Get a user's data. If the document doesn't exist in the database, create it.
  const docRef = firestore().collection('users').doc(uid);
  const userDoc = await docRef.get();
  const data = userDoc.data();
  if (data) {
    return {
      username: data.get('username'),
      transactions: firestore()
        .collection('users')
        .doc(uid)
        .collection('transactions'),
    };
  }
}
