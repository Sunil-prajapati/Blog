import React from 'react';
import {Button,StyleSheet,TouchableOpacity,Text} from 'react-native';
import IndexScreen from './screens/IndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from './Context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Blog" 
          component={IndexScreen} 
          options={({ navigation }) => ({
            headerRight: props => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Text>+</Text>
                </TouchableOpacity>,
          })}
          />
          <Stack.Screen 
          name="Show" 
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerRight: props => <TouchableOpacity onPress={() => 
            navigation.navigate('Edit',{id: route.params.id})}>
              <Text>Edit</Text>
                </TouchableOpacity>,
          })}
           />
          <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Create Blog' }}/>
          <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Edit Blog' }}/>

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  
});
