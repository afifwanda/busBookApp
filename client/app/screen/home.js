import React, {useState,useEffect} from 'react';
import {Picker} from '@react-native-community/picker';
import {getSchedule} from '../store/action';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {styles} from '../styles/stylesheet.js';

function Home(){
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [arrival,setArrival] = useState(null);
  const [departure,setDeparture] = useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  function onClick(){
    if(arrival === 'Dhaka' && departure === 'Comilla'){
      dispatch(getSchedule(1109001))
    } else if(arrival === 'Dhaka' && departure === 'Chitaggong'){
      dispatch(getSchedule(1109002))
    }
    navigation.navigate('Schedule')
  }


  return(
    <View style={styles.body}>
      <ScrollView>
      <Image 
        source={require('../../assets/redbus.png')}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={{fontSize:15,color:'white'}}
          >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={{fontSize:15,color:'white'}}
          >Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View
      style={styles.navbar}>
        <Text
        style={{fontSize:20,color:'white'}}
        >
          Home
        </Text>
      </View>
      <View style={styles.searchBox}>
      <Text
      style={{fontSize:20,color:'black'}}
      >Leaving From :</Text>
      <View style={{borderRadius:5,borderWidth:1,borderColor:'grey',backgroundColor:'white',marginBottom:'5%',marginTop:'5%'}}>
        <Picker
            selectedValue={arrival}
            style={{height: 40,width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
              setArrival(itemValue)
            }
          >
            <Picker.Item label='Select Place' value='null' />
            <Picker.Item label='Dhaka' value='Dhaka' />
            <Picker.Item label='Comilla' value='Comilla' />
            <Picker.Item label='Chitaggong' value='Chitaggong' />
        </Picker>
        </View>
        <Text
        style={{fontSize:20,color:'black'}}
        >Going To :</Text>
        <View style={{borderRadius:5,borderWidth:1,borderColor:'grey',backgroundColor:'white',marginBottom:'5%',marginTop:'5%'}}>
        <Picker
            selectedValue={departure}
            style={{height: 40,width:'100%'}}
            onValueChange={(itemValue, itemIndex) =>
              setDeparture(itemValue)
            }
          >
            <Picker.Item label='Select Place' value='null' />
            <Picker.Item label='Dhaka' value='Dhaka' />
            <Picker.Item label='Comilla' value='Comilla' />
            <Picker.Item label='Chitaggong' value='Chitaggong' />
            <Picker.Item label='Cox Bazzar' value='Cox Bazzaar' />
            <Picker.Item label='Rajshahi' value='Rajshahi' />
        </Picker>
        </View>
        <Text
        style={{fontSize:20,color:'black'}}
        >Departing On :</Text>
        <TouchableOpacity style={{borderRadius:5,borderWidth:1,borderColor:'grey',backgroundColor:'white',marginBottom:'5%',marginTop:'5%'}}
          onPress={showDatepicker}
        >
        <Picker
            selectedValue={date}
            style={{height: 40,width:'100%'}}
          >
            <Picker.Item label='dd/mm/yy' value='null' />
        </Picker>
        </TouchableOpacity>
        {show && (
        <DateTimePicker
          value={date}
          mode={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        )}
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>onClick()}
        >
          <Text
            style={{fontSize:15,color:'white'}}
          >Search Buses</Text>
        </TouchableOpacity>
      </View>
        <Image 
          source={require('../../assets/offer.png')}
          style={styles.image}
        />
      </View>
      <View
      style={styles.infoBoxContainer}
      >
      <View style={styles.infoBox}>
        <Text
          style={{fontSize:20,color:'black',marginBottom:10}}
        >Popular Roads</Text>
        <Text>Dhaka to Dinajpur</Text>
        <Text>Dhaka to Panchagor</Text>
        <Text>Dhaka to Kurigram</Text>
        <Text>Dhaka to Rangpur</Text>
        <Text>Dhaka to Thakurgaon</Text>
      </View>
      <View style={styles.infoBox}>
        <Text
          style={{fontSize:20,color:'black',marginBottom:10}}
        >Why Buy Ticket From Us?</Text>
        <Text>Buy bus tickets anytime from anywhere</Text>
        <Text>Pay by credit card, mobile banking or cash</Text>
        <Text>Get tickets delivered to your doorstep</Text>
        <Text>Dependable customer service (8 AM to 11 PM)</Text>
      </View>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/payment.png')}
          style={styles.image}
        />
      </View>
      </ScrollView>
    </View>
  )

}

export default Home