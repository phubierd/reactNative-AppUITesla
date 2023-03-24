import React from 'react'
import { FlatList, View, Dimensions } from 'react-native'
import { Text } from 'react-native'
import CarItem from '../CarItem'
import cars from './cars'
import { styles } from './style'

const CarsList = ({ }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => {
                    return (
                        <CarItem name={item.name} tagline={item.tagline} image={item.image} taglineCTA={item.taglineCTA} />
                    )
                }}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList
