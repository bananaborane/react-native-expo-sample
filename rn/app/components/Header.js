import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'

const Header = ({ title }) => (
	<View style={styles.headerContainer}>
		<Text style={styles.headerText}>{title.toUpperCase()}</Text>
        
        {/* USING REACT NATIVE ELEMENTS LIBRARY */}
        <Button title='RN Elements Button' icon={{ name:'code' }} />
        {/* USING REACT NATIVE ELEMENTS LIBRARY */}

	</View>
);

const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 40
	},
	headerText: {
		color: 'white',
		fontSize: 22,
		fontWeight: '500'
	}
});

export default Header;
