import * as React from 'react';
import {Text, View, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Coucou</Text>
      <Button title="Go to Info" onPress={() => navigation.navigate('Info')} />
    </View>
  );
}

export default HomeScreen;
