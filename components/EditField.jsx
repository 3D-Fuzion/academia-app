import Calendario from '../assets/menu/calendario';
import Atletas from '../assets/menu/atletas';
import CheckInIcon from '../assets/menu/checkin';
import Pagamento from '../assets/menu/pagamento';
import Recorde from '../assets/menu/recorde';
import Sair from '../assets/menu/sair';
import EditProfile from '../assets/editprofile';
import { TouchableOpacity } from 'react-native';
import { Modal, SafeAreaView, Text } from 'react-native'
import { useState } from 'react';
export default function EditField({ title, method}) {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    }}>
    <SafeAreaView style={{
    	flex: 1, 
    	marginLeft: 15, 
    	marginRight: 15
    }}>
    <SafeAreaView>
	    <SafeAreaView style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10}}>
	    	<SafeAreaView>
	    		<Text style={{fontSize: 18}}>{title}</Text>
	    	</SafeAreaView>
    		<SafeAreaView>
	    		<TouchableOpacity style={{backgroundColor: "transparent"}}
          onPress={() => method()}>
	    			<EditProfile/>
	    		</TouchableOpacity>	
    		</SafeAreaView>	
	    </SafeAreaView>
	    <SafeAreaView style={{height:1,  borderWidth: 1, borderColor: "#5B5B5B"}}></SafeAreaView>
    </SafeAreaView>

   	</SafeAreaView>
    </SafeAreaView>
  )
}