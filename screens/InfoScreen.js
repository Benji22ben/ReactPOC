import * as React from 'react';
import {Text, View, Button} from 'react-native';

async function sendData() {
  const username = 'ben';
  const password = 'gsgds';

  const result = await fetch('http://192.168.1.58:3000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => res.json());
  console.log(result);
}

function InfoScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Coucou</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Info Again"
        onPress={() => navigation.push('Info')}
      />
      <Button title="Log In" onPress={() => sendData()} />
    </View>
  );
}
export default InfoScreen;
