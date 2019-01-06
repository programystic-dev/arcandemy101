import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './style.js';

const MenuButton = ({ navigation }) => (
	<View>
		<TouchableOpacity onPress={() => navigation.openDrawer()}>
			<Image
			  source={require('../../../../assets/img/menu.png')}
				style={styles.drawerButton}
			/>
		</TouchableOpacity>
	</View>
);

export default MenuButton;
