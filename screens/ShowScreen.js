import React,{useContext} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Context} from '../Context/BlogContext';

const ShowScreen = ({route}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

});

export default ShowScreen;