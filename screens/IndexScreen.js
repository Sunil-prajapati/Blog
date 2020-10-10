import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext';


const indexScreen = ({navigation}) => {
    const {state,deleteBlogPost} = useContext(Context);
    
    return (
        <View>
            <FlatList
            data={state}
            keyExtractor={(blogPosts) => blogPosts.title}
            renderItem={({item}) => {
            return(
            <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}> 
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity>
                        <Button style={styles.icon} title="Del" onPress={() => deleteBlogPost(item.id)}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            );
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        paddingHorizontal:10,
        borderColor:'gray',
    },
    title:{
        fontSize:18,
    },
    icon:{
        fontSize:24,
    }
});

export default indexScreen;