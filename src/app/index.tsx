import { Text, View } from "react-native";
import Login from "./pages/login";
import { useState } from "react";


export default function Home(){
    const [istAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <View className="bg-gray-500">
            <Login/>
        </View>
    )
}

