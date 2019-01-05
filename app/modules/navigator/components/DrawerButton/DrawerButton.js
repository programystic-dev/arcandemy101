import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MenuButton = ({ navigation }) => (
	<View>
		<TouchableOpacity onPress={() => navigation.openDrawer()}>
			<Text>B</Text>
		</TouchableOpacity>
	</View>
);

export default MenuButton;
