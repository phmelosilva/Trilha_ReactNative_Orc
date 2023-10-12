import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const carteira_digital = () => {
	return (
		<View style={styles.container}>
			<View >
				<Text style={styles.titulo} > Carteira Digital Roubada </Text>
			</View>

			<View>
				<Text style={styles.textoNeg} > Foto do Meliante </Text>
			</View>

			<View> 
				<Text>
					<Text style={styles.textoNeg} > Nome: </Text>
					<Text> Morb Brown </Text>
				</Text>
				<Text>
					<Text style={styles.textoNeg} > Habilitação: </Text> 
					<Text> Krai </Text>
				</Text>
				<Text>
					<Text style={styles.textoNeg} > Validade: </Text> 
					<Text> enquanto eu puder espionar sua mãe </Text>
				</Text>
				<Text>
					<Text style={styles.textoNeg} > Identidade: </Text> 
					<Text> O cara do fusca amarelo que ganha do Kwid no racha </Text>
				</Text>
			</View>

			<View>
				<Text>
					Imprima seu motorista de excelência
				</Text>

				<Text>
					Perca sua mãe, DE NOVO :D
				</Text>
			</View>

		</View>  		
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		top: "7%",
		color: "red",
	},

	titulo: {
		fontFamily: 'sourcecodepror',
		fontSize: 30,
	},
	
	textoNeg: {
		fontWeight: "bold",
	},

});

export default carteira_digital;