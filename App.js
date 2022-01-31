import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
    }, 5100);
  }, []);

  if(isLoading){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#007bff'}}>
        <LottieView source={require('./management.json')} autoPlay loop duration={2000}/>
      </View>
    )
    }


    
    return(
      <WebView source={{ uri: 'http://pms.wooshelf.com' }} />
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default App;