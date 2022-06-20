// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBkNtiaz14ygPZcpcWtjdMmiVzUJVMFopY',
  authDomain: 'portfolio-ab4c9.firebaseapp.com',
  projectId: 'portfolio-ab4c9',
  storageBucket: 'portfolio-ab4c9.appspot.com',
  messagingSenderId: '876030951280',
  appId: '1:876030951280:web:3294a6914f52a47163d9b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const projects = async () => {
  const snapshots = await getDocs(collection(db, 'favorites'));
  const results = [];
  snapshots.forEach((doc) => results.push(doc.data()));
  return results;
};

export default projects;
