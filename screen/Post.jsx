import { TextInput, TouchableOpacity, Text, KeyboardAvoidingView, SafeAreaView } from "react-native"
import DocumentPicker from 'react-native-document-picker';
import { useState } from "react";
import RNFetchBlob from "rn-fetch-blob";
import { PermissionsAndroid } from "react-native";
export default function Post({ navigation }) {
  const [image, setImage] = useState("")

  async function requestReadExternalStorage() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  };

  async function SelectFile() {
    await requestReadExternalStorage()

    try {
      const result = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen"
      });
      setImage([result])
      RNFetchBlob.fs
        .stat(result.uri)
        .then((stats) => {
          console.log(stats.path);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(image);
    } catch (error) {
      handleError(e)
    }
  }

  // async function UploadFile() {
  //   RNFetchBlob.fetch('POST', 'https://api.imgbb.com/1/upload?expiration=600&key=6ba1f63f9b2cc3e94aaa5f87fec6033dY', {
  //     'Content-Type': 'application/octet-stream'
  //   }, RNFetchBlob.wrap(Stat(image.uri)))
  // }

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <SafeAreaView style={{ flex: 4 }}>
          <Text>TITULO AQUI</Text>
        </SafeAreaView>
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Feed")} style={{ width: 30, height: 30, backgroundColor: "red", borderRadius: 100 }}></TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 10 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 5 }}>
            <SafeAreaView style={{ flex: 1, margin: 20, elevation: 10, borderRadius: 10, backgroundColor: "#ECECEC", flexDirection: "row" }}>
              <TouchableOpacity onPress={() => SelectFile()} style={{ margin: 20, alignSelf: "flex-end", marginLeft: "auto", height: 39, width: 79, backgroundColor: "green", justifyContent: "center", alignItems: "center", borderRadius: 40 }}>
                <Text style={{ color: "white" }}>Adicionar</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 5 }}>
            <SafeAreaView style={{ flex: 1 }}>
              <TextInput style={{ flex: 1, minHeight: 40, elevation: 10, backgroundColor: "#ECECEC", borderRadius: 50, margin: 20, padding: 10 }}></TextInput>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 3 }}>
              <TouchableOpacity onPress={() => UploadFile()} style={{ flex: 1, margin: 80, borderRadius: 100, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 45, color: "white", elevation: 10 }}>Publicar</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </KeyboardAvoidingView >
  )
}