import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './style'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode='contain' />
            <Image source={require('../../assets/images/menu.png')} style={styles.menu} />
        </View>
    )
}

export default Header