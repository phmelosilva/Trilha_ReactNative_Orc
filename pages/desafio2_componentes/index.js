import React  from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

const Comidas = () => {
	return (
		<View style={styles.container}>
			<Avaliacao comida="milho" avaliacao="Bão demais" nota={7} />
		</View>  		
  );
}

function Avaliacao(props) {
	return (
		<View style={styles.container_av}>
			<Image style={styles.imagem}
			source={{
				uri: 'https://i.imgur.com/CTfHcvW.jpg',
				}}
			/>
			<View style={styles.descricao}>
				<Text style={styles.comida} > {props.comida} </Text>
				<Text> {props.avaliacao} </Text>
				<Text> {props.nota} pontos </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		margin: "10%",
		width: 350,
		height: 50,
		borderWidth: 1,
		borderColor: 'blue',
	},

	container_av: {
		flex: 1,
		flexDirection: "row",
    	borderWidth: 1,
		borderColor: 'green',
		width: 300,
	},

	imagem: {
		width: 94,
		height: 94,
		borderRadius: 50,
		// marginLeft: '21%',
		// marginTop: '28%',
	},	

	comida: {
		fontSize: 40,
	},	

	descricao: {
		flex: 1,
		flexDirection: "column",
		left: "3%",
	},

});

export default Comidas;