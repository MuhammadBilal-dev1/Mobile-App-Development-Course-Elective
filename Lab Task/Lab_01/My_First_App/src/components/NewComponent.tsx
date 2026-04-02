import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewComponent = ({ count }: { count: number }) => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "#d1d1d1",
          width: 50,
          textAlign: "center",
          padding: 10,
          borderRadius: 5,
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        {count}
      </Text>
    </View>
  );
};


export default NewComponent

