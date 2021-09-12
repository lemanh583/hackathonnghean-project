import * as React from 'react';
import { Button, View, Text} from 'react-native';

function MainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button
          title="Go to Urgent"
          onPress={() => navigation.navigate('Urgent')}
        />
      </View>
    );
  }
export default MainScreen;