import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyC3RPdSzsCIrEJfnykRtoRHz54f5kdHfN8",
    authDomain: "bootcamp-expense-tracker-pwa.firebaseapp.com",
    databaseURL: "https://bootcamp-expense-tracker-pwa.firebaseio.com",
    projectId: "bootcamp-expense-tracker-pwa",
    storageBucket: "bootcamp-expense-tracker-pwa.appspot.com",
    messagingSenderId: "9396870103",
    appId: "1:9396870103:web:ae13ab404147704defc992"
};

firebase.initializeApp(config);

export default firebase;
