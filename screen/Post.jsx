import { TextInput, TouchableOpacity, Text, KeyboardAvoidingView, SafeAreaView } from "react-native"
import DocumentPicker from 'react-native-document-picker';
import { useState } from "react";
import RNFetchBlob from "rn-fetch-blob";
import RNFS from 'react-native-fs'
import { PermissionsAndroid } from "react-native";
import axios from "axios";
export default function Post({ navigation }) {
  const [image, setImage] = useState("")

  async function requestReadExternalStorage() {
    try {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

      console.log('Read and write external storage permissions granted');
    } catch (err) {
      console.warn(err);
      console.log('Read and write external storage permissions denied');
    }
  };

  async function SelectFile() {
    await requestReadExternalStorage();

    try {
      const result = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen"
      });
      setImage([result]);
      RNFetchBlob.fs
        .stat(result.uri)
        .then((stats) => {
          console.log(stats.path);
          RNFS.readFile(stats.path, "base64")
            .then(res => {
              setImage(res)
            })
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      handleError(error);
    }
  }

  async function UploadFile() {
    const formData = new FormData();
    formData.append('image', image);

    axios.post('https://api.imgbb.com/1/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        key: "6ba1f63f9b2cc3e94aaa5f87fec6033d",
      },
    }).then((res) => {
      console.log(res.status);
    }).catch((err) => {
      err.response.status
    });
  }

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