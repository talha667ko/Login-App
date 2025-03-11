import { View, Text } from 'react-native'
import React from 'react'
import {getAuth} from "firebase/auth";

const Details = () => {

  const user = getAuth().currentUser;
  return (
    <View style={{flex: 1,justifyContent: "center", alignContent: "center"}}>
      <Text style={{alignSelf: "center", fontSize: 20, fontWeight: "bold"}}>Welcome to your details page.   </Text>
      <Text style={{alignSelf: "center"}}>Your Email: {user ? user.email : 'No user logged in'}</Text>

    </View>
  )
}

export default Details