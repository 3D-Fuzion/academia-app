import { SafeAreaView, Text } from "react-native";

export default function CheckInStudentContainer({ name }) {
  return (
    <SafeAreaView style={{
      marginTop: 10,
      minWidth: "80%",
      height: 50,
      backgroundColor: "#ECECEC",
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Text style={{ fontSize: 20 }}>{name}</Text>
    </SafeAreaView>
  )
}