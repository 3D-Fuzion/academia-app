import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../assets/command_bar/home';
import Treino from '../assets/command_bar/treino';
import Post from '../assets/command_bar/post';
export default function CommandBar({ goto }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#187B63',
      }}>
      <TouchableOpacity onPress={() => goto("Feed")}>
        <Home width={30} height={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goto("Record")}>
        <Treino width={45} height={45} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goto("Post")}>
        <Post width={30} height={30} />
      </TouchableOpacity>
    </SafeAreaView >
  );
}
