export default function RecordButton ({title}) { 
	return ( 
	<SafeAreaView>
	<TouchableOpacity>
          <SafeAreaView
            style={{
              flexDirection: 'row',
              marginTop: 40,
              width: 224,
              height: 54,
              borderRadius: 100,
              backgroundColor: '#187B63',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 28,
                color: 'white',
              }}>
              {title}
            </Text>
          </SafeAreaView>
        </TouchableOpacity>
	</SafeAreaView>
	)
}