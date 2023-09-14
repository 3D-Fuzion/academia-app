import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
export default function ExerciceContainer({ title, weight }) {
  return (
    <SafeAreaView style={{
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#187B63",
      borderRadius: 5,
      marginBottom: 10,
      flexDirection: "row"
    }}>
      <SafeAreaView style={{ flex: 3 }}>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          lineHeight: 21.78,
          color: "white",
        }}>
          {title}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 1, height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
        <TouchableOpacity style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 5 }}>
          <Text style={{
            fontSize: 18,
            lineHeight: 21.78,
            color: "black",
          }}>
            {!weight ? "0" : weight}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}
