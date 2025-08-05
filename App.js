import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text,Image, View } from 'react-native';

export default function App() {
 return (
    <ScrollView style={styles.container}>
      <Header logo={require('..assets/adaptive-icon.png')} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Sobre Nossa Marca</Text>
        
        <Image 
          source={require('..assets/favicon.png')} 
          style={styles.image}
          resizeMode="cover"
        /> 
    <Text style={styles.subtitle}>Nossos Valores</Text>
      <Text style={styles.text}>
           Inovação contínua{'\n'}
           Foco no usuário{"\n"}
           Excelência em design{'\n'}
           Colaboração e transparência{'\n'}
           Agilidade com qualidade{'\n'}
           Impacto positivo


       </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});
