importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');

firebase.initializeApp({
	apiKey: "AIzaSyC3RPdSzsCIrEJfnykRtoRHz54f5kdHfN8",
    authDomain: "bootcamp-expense-tracker-pwa.firebaseapp.com",
    databaseURL: "https://bootcamp-expense-tracker-pwa.firebaseio.com",
    projectId: "bootcamp-expense-tracker-pwa",
    storageBucket: "bootcamp-expense-tracker-pwa.appspot.com",
    messagingSenderId: "9396870103",
    appId: "1:9396870103:web:ae13ab404147704defc992"
});

firebase.messaging();
