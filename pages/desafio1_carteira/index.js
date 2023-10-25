import React  from 'react';
import { View, Text, StyleSheet, Button, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const carteira_digital = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={{ uri: 'https://imgur.com/SvR6xzz.png' }} resizeMode="cover" style={styles.fundo} >
				<View style={styles.cabecalho} >
					<Text style={styles.titulo} > Carteira de Habilitação Roubada </Text>
				</View>

				<View style={styles.fotos}>
					
					<Image
						style={styles.foto}
						source={{
							uri: 'https://imgur.com/E6PVKAH.png',
						}}
					/>

					<Image
							style={styles.logo}
							source={{
								uri: 'https://imgur.com/xC9RJ2Y.png',
							}}
						/>
				</View>

				<View style={styles.info} > 
					<Text>
						<Text style={styles.textoNeg} > Nome: </Text>
						<Text style={styles.descricao} > Morb Brown (/•ิ_•ิ)/ </Text>
					</Text>
					<Text>
						<Text style={styles.textoNeg} > Habilitação: </Text> 
						<Text style={styles.descricao} > Krai </Text>
					</Text>
					<Text>
						<Text style={styles.textoNeg} > Validade: </Text> 
						<Text style={styles.descricao} > enquanto eu puder espionar sua mãe </Text>
					</Text>
					<Text>
						<Text style={styles.textoNeg} > Identidade: </Text> 
						<Text style={styles.descricao} > O cara do fusca amarelo que ganha do Kwid no racha </Text>
					</Text>
				</View>

				<View style={styles.botoes} >
					<TouchableOpacity
						style={styles.botao}
						onPress={() => Alert.alert('ótima escolha')}
					>
						<Text style={styles.texto} > Imprima seu Motorista de Excelência </Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.botao}
						onPress={() => Alert.alert('Perdeu parça')}
					>
						<Text style={styles.texto} > Perca sua mãe, DE NOVO :D </Text>
					</TouchableOpacity>
				
				</View>
			</ImageBackground>
			

		</View>  		
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		top: "3%",
	},

	cabecalho: {
		backgroundColor: 'green',
		borderRadius: 20,
	},

	titulo: {
		fontSize: 30,
		textAlign: 'center',
		width: 420,

	},

	foto: {
		borderRadius: 20,
    	borderWidth: 1,
		borderColor: 'green',
		width: 195,
		height: 210,
		marginTop: '6%',
	},

	fotos: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		paddingTop: '5%',
	},

	fundo: {
		width: '100%',
		height: '100%',
		flex: 1,
		alignItems: "center",
	},

	logo: {
		width: 94,
		height: 94,
		borderRadius: 50,
    	borderWidth: 1,
		borderColor: 'green',
		marginLeft: '21%',
		marginTop: '28%',

	},
	
	info: {
		flex: 1,
		marginTop: '5%',
		backgroundColor: 'green',
		borderRadius: 6,
    	borderWidth: 3,
		borderColor: 'yellow',
		justifyContent: 'space-evenly',
	},	

	botoes: {
		flex: 1,
		width: '85%',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		marginBottom: '4%',
	},

	botao: {
		borderRadius: 10,
    	borderWidth: 1,
		backgroundColor: '#242419',
		width: 350,
		height: 30,
		color: 'white',
	},

	texto: {
		fontWeight: "bold",
		color: 'white',
		textAlign: 'center',
	},

	textoNeg: {
		fontWeight: "bold",
		color: 'white',
		fontSize: 20,
	},

	descricao: {
		fontSize: 15,
	},

});

export default carteira_digital;