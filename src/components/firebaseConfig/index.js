import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase () {
    const firebaseConfig = {
        apiKey: "AIzaSyCgckMAxHfL9taWaKuXGD7yRuiz8za3luE",
        authDomain: "rechart-5759c.firebaseapp.com",
        databaseURL: "https://rechart-5759c-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "rechart-5759c",
        storageBucket: "rechart-5759c.appspot.com",
        messagingSenderId: "261799561605",
        appId: "1:261799561605:web:ce349138c05f2e7314dcec"
    };

    const app = initializeApp(firebaseConfig);

    return getDatabase(app);
}

export default StartFirebase;



