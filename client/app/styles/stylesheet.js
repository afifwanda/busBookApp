import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    minHeight: '100%'
  },
  logo:{
    width:130,
    height:130
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '3%',
    justifyContent: 'flex-end',
    marginTop: 30
  },
  searchButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  button:{
    height: '100%',
    width: '40%',
    backgroundColor: 'coral',
    display: 'flex',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:'100%',
    height: '50%'
  },
  navbar:{
    width:'100%',
    height:'5%',
    backgroundColor:'coral',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  searchBox:{
    width: '100%',
    height: 400,
    backgroundColor: '#f7f7f7',
    marginTop: '4%',
    marginBottom: 180
  },
  infoBoxContainer:{
    width: '100%',
    display:'flex',
    alignItems:'center',
    marginBottom: 40
  },
  infoBox:{
    borderRadius:5,
    borderColor:'black',
    borderWidth: 1,
    backgroundColor:'#f7f7f7',
    height: 150,
    width: '90%',
    display: 'flex',
    paddingTop: 10,
    alignItems: 'center'
  },
  imageContainer:{
    height:140,
  },
  tableContainer:{
    width:'100%',
    height: '100%',
    backgroundColor:'brown',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})