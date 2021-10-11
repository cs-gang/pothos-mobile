import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

type TransactionType = 'income' | 'expenditure';
interface UserData {
  username?: string;
  currency: string;
  tags: string[];
  transactions: FirebaseFirestoreTypes.CollectionReference;
}

interface Transaction {
  transactionType: TransactionType;
  amount: number;
  name: string;
  notes: string;
  tags: string[];
}

export async function getUserData(uid: string): Promise<UserData | undefined> {
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
      currency: data.get('currency'),
      tags: data.get('tags'),
    };
  }
}

export async function createNewTransaction(
  uid: string,
  transaction: Transaction,
) {
  // update the top-level user doc to include the tags
  // arrayUnion will avoid repetition
  let docRef = firestore().collection('users').doc(uid);
  docRef.update({
    tags: FirebaseFirestoreTypes.FieldValue.arrayUnion(...transaction.tags),
  });
  let transactionColRef = docRef.collection('transactions');
  await transactionColRef.add({
    name: transaction.name,
    notes: transaction.notes,
    amount: transaction.amount,
    transactionOn: FirebaseFirestoreTypes.Timestamp.now(),
    transactionType: transaction.transactionType,
    tags: transaction.tags,
  });
}
