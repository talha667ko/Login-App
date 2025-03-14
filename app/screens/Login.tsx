import { View, Text,StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading (true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            //console.log(response);
        } catch (error: any) {
            console.log(error);
            alert("Sign in failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }
    const signUp = async () => {
        setLoading (true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            //console.log(response);
            alert("Check your emails!");
        } catch (error: any) {
            console.log(error);
            alert("Sign up failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }
  return (

    <View style={styles.cointainer}>
        <Text style={styles.Title}>Simple FireAuth</Text>
        <KeyboardAvoidingView behavior='padding'>
        <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

        { loading ? <ActivityIndicator size="large" color="#0000ff" />
        : <>
        <Button title='Login' onPress={signIn}/>
        <Button title='New account' onPress={signUp}/>
        </>}
        </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    cointainer:{
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#fff",
    },
    Title: {
        alignSelf: 'center',
        fontSize: 35,
        marginBottom: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    }
})