import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>
        Bem Vindo, Luis Felipe Cracco Da Silva
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>ADD</Text>  
      </TouchableOpacity> 

      <Text style={[styles.title, {marginTop:20}]}>
        My Skills:
      </Text>

      {
        mySkills.map(skill => (
        <TouchableOpacity style={styles.buttonSkill} key={skill}>
          <Text style={styles.textSkill}>
            {skill}
          </Text>
        </TouchableOpacity>))
      
      }
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 20,
    
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop:30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  }, 
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',

    marginVertical: 10
  },
  textSkill: {
    color: '#fff', 
    fontSize: 22,
    fontWeight: 'bold',
  }
});


