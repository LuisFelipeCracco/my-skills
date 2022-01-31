import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

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
       

      <Text style={[styles.title, {marginTop:20}]}>
        My Skills:
      </Text>

     <Button onPress={handleAddNewSkill} />

      {
        mySkills.map(skill => (
          <SkillCard skill={skill}></SkillCard>
        ))
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
});


