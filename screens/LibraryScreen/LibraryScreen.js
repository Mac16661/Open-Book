import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LibraryScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Library</Text>
        </View>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
