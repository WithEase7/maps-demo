import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const Demo = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title='Maps' onPress={()=>navigation.navigate('Maps')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Demo
