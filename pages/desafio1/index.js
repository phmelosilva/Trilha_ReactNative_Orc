import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const carteira_digital = () => {
	return (
		<View>
			<Text style={styles.titulo} > Carteira Digital </Text>
		</View>  	
  );
}

const styles = StyleSheet.create({
	titulo: {
		fontFamily: 'sourcecodepror',
		fontSize: 30,
	},
});

export default carteira_digital;