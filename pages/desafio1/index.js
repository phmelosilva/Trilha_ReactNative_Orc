import React  from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

// import { Container } from './styles';

const carteira_digital = () => {
	return (
		<View style={styles.container}>
			<Image
					style={styles.fundo} source={require('./src/assets/imgs/fundo_carteira.jpeg')}
			/>

			<View >
				<Text style={styles.titulo} > Carteira de Habilitação Roubada </Text>
				<Image
					style={styles.foto} source={require('./src/assets/imgs/malbec.jpg')}
				/>
			</View>

			<View>
				<Text style={styles.textoNeg} > Foto do Meliante </Text>
				<Image
					style={styles.foto} source={require('./src/assets/imgs/malbeck.jpeg')}
				/>
			</View>

			<View > 
				<Text>
					<Text style={styles.textoNeg} > Nome: </Text>
					<Text> Morb Brown (/•ิ_•ิ)/ </Text>
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
				<Button
					title="Imprima seu motorista de excelência"
					onPress={() => Alert.alert('ótima escolha')}
				/>
				
				<Button
					title="Percua sua mãe, DE NOVO :D"
					onPress={() => Alert.alert('Perdeu parça')}
				/>
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
		fontSize: 30,

	},

	foto: {
		borderRadius: 40,
    	borderWidth: 2,
		borderColor: 'white'
	},

	fundo: {
		zIndex: 1,
	},
	


	textoNeg: {
		fontWeight: "bold",
	},

});

export default carteira_digital;