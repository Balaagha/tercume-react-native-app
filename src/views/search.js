import React from 'react'
import { View, Text, Button } from 'react-native'

const SearchView = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to Details"  onPress={() => navigation.navigate('Detail')}/>
        </View>
    )
}

export default SearchView;
