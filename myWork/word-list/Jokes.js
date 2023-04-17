import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Jokes() {
  const [setup, setSetup] = useState("5 ants rented an apartment with another 5 ants.");
  const [punchline, setPunchline] = useState("Now they're tenants.");
      
  function getJokesFromApi() {
    /* fetch is an asynchronous function that runs in the background
    and will not slow down the rest of the app 
    Try these other APIs
    https://official-joke-api.appspot.com/jokes/random
    https://official-joke-api.appspot.com/jokes/programming/random
    https://reactnative.dev/movies.json
    https://quotable.io/quotes?page=1
   */
       
  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then((response) => response.json())
    .then((json) => {  
      /* view the JSON that's returned in the server log */ 
      console.log(json);      
      /* use dot notation to get the setup and punchline and update the state variables */
      setSetup(json.setup);
      setPunchline(json.punchline);
    })
    .catch((error) => {
       console.error(error);
    });
  };
 
  return (
    <View style={styles.container}>
      <Text>{setup}</Text>
      <Text>{punchline}</Text>
      <Button title="Get Another Joke" onPress={()=>getJokesFromApi()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
