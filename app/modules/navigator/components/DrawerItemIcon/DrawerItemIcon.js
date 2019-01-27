import React from 'react';
import { Image } from 'react-native';
import styles from './style.js';
import images from '../../../../assets/img/images.js';

const DrawerItemIcon = ({isLocked}) => {
	if (!isLocked) {
		return(
			<Image source={images.key} style={styles.drawerItemIcon} />
		)
	} else if (isLocked) {
		return (
			<Image source={images.locker} style={styles.drawerItemIcon} />
		)
	};
};

export default DrawerItemIcon;
