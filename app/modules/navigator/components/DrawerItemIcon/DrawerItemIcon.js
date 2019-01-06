import React from 'react';
import { Image } from 'react-native';
import styles from './style.js';

const DrawerItemIcon = ({ iconLink }) => (
	<Image source={iconLink} style={styles.drawerItemIcon} />
);

export default DrawerItemIcon;
