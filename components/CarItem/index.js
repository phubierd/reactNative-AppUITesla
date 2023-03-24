import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import StyledButton from '../StyledButton'
import { styles } from './styles'

const CarItem = ({ name, tagline, image, taglineCTA }) => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground source={image} style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton type='primary' content='Custom Order' onPress={() => { }} />
                <StyledButton type='secondary' content='Exsting Inventory' onPress={() => { }} />
            </View>

        </View>
    )
}

export default CarItem