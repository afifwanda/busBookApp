import React, {useState,useEffect} from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import {styles} from '../styles/stylesheet.js';
import {useSelector} from 'react-redux';

function Schedule({navigation}){

  const scheduleList = useSelector(state=>state.reducer.schedule);
  console.log(Object.values(scheduleList))
  

  return(
    <View style={styles.body}>
      <Text>Test</Text>
      <View style={styles.tableContainer}>
        <View>
          <Text style={{color:'white'}}>Coach Type</Text>
          {
            Object.values(scheduleList).map(element=>{
            return <Text style={{color:'white'}}>{element.coach_type}</Text>
            })
          }
        </View>
        <View>
          <Text style={{color:'white'}}>Name</Text>
          {
            Object.values(scheduleList).map(element=>{
            return <Text style={{color:'white'}}>{element.name}</Text>
            })
          }
        </View>
        <View>
          <Text style={{color:'white'}}>Seat</Text>
          {
            Object.values(scheduleList).map(element=>{
            return <Text style={{color:'white'}}>{element.seat}</Text>
            })
          }
        </View>
        <View>
          <Text style={{color:'white'}}>Fare</Text>
          {
            Object.values(scheduleList).map(element=>{
            return <Text style={{color:'white'}}>{element.fare}</Text>
            })
          }
        </View>
      </View>
    </View>
  )

}

export default Schedule