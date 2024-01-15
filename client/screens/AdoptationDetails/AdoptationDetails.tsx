
import React from "react"
import {View,Text,StyleSheet,Dimensions,Image, ScrollView, TouchableOpacity} from "react-native"
const { width, height } = Dimensions.get('screen');
import chien from "../../assets/chien.jpg"
import Svg, { Path, G } from 'react-native-svg';

const AdoptationDetails=()=>{



    return(

<ScrollView  style={styles.allPages}>
<Image style={styles.animalImage} source={chien}></Image>
<View  style={{padding:20}}>
<View >
    <Text style={{fontSize:24,color:"black"}}>Alex</Text>
    <Text  style={{fontSize:18,color:"grey"}}>Australia Sheltter dog</Text>

</View>

    <View  style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:18,padding:20}}>
<View  style={{backgroundColor:"lightgrey",width:width*0.2,height:height*0.08,justifyContent:"center",alignItems:"center",borderRadius:10}}>
    <Text  style={{color:"black",fontWeight:"bold"}}>Male</Text>
    <Text>sex</Text>
</View>
<View  style={{backgroundColor:"lightgrey",width:width*0.2,height:height*0.08,justifyContent:"center",alignItems:"center",borderRadius:10}}>
    <Text   style={{color:"black",fontWeight:"bold"}}>1 Year</Text>
    <Text>Age</Text>
</View>
<View  style={{backgroundColor:"lightgrey",width:width*0.2,height:height*0.08,justifyContent:"center",alignItems:"center",borderRadius:10}}>
    <Text  style={{color:"black",fontWeight:"bold"}}>10kg</Text>
    <Text>weight</Text>
</View>

    </View>
    <View  style={{width:width*0.9,height:height*0.14,gap:10}}>
        <Text  style={{fontSize:20}}>Description:</Text>
        <Text>Le chien est un mammifère de la famille des canidés. C'est la première espèce animale à avoir été domestiquée par l'homme dans le but de la chasse.</Text>
    </View>
    <View style={{justifyContent:"center" ,width:width,alignItems:"center",height:height*0.05,marginTop:35,marginBottom:70,marginHorizontal:-20}}>
    <TouchableOpacity style={{backgroundColor:"black",height:height*0.05,width:width*0.5,justifyContent:"space-around",alignItems:"center",borderRadius:15,flexDirection:"row"}} >
        <Text  style={{color:"white",fontSize:16,fontWeight:"bold"}}>
            Adopt Me
        </Text>
        <Svg width={30} height={20} viewBox="0 0 16.564 16.564">
        <G>
          <G>
            <Path fill="white" d="M12.085,11.966c-1.45-1.816-1.521-4.027-1.521-4.027c-0.092-0.073-0.18-0.175-0.316-0.264 c-0.032-0.021-0.054-0.038-0.085-0.057C10.053,7.542,9.922,7.47,9.796,7.42C9.392,7.255,9.034,7.201,8.585,7.182 C7.936,7.157,7.466,7.42,7.042,7.748C6.97,7.805,6.899,7.871,6.833,7.938c-0.153,0.154-0.21,0.228-0.34,0.366 C6.467,8.328,6.467,8.339,6.445,8.361c0,0-0.549,1.878-1.563,3.231c-1.013,1.353-2.331,1.874-2.331,2.226 c0,0.544,0.026,0.8,0.234,1.287c0.056,0.137,0.143,0.274,0.222,0.392c0.152,0.219,0.183,0.216,0.278,0.336 c0.082,0.104,0.209,0.199,0.32,0.281c0.085,0.066,0.183,0.13,0.279,0.181c0.014,0.006,0.03,0.015,0.045,0.024 c0.155,0.079,0.331,0.155,0.511,0.184l0.554,0.061h0.174c0.585-0.025,1.496-0.294,2.014-0.437c0.136-0.038,0.281-0.07,0.426-0.104 l0.942-0.117c0.462-0.028,1.322,0.158,1.791,0.294c0.531,0.158,1.169,0.335,1.72,0.364h0.288c0.537-0.029,1.037-0.223,1.441-0.557 c0.522-0.428,0.851-0.952,0.951-1.642C14.874,13.436,13.535,13.782,12.085,11.966z" />
            <Path
              fill="white"
              d="M15.926,6.508c0.072-0.097,0.129-0.202,0.163-0.313c0.061-0.199,0.062-0.405,0.008-0.594 c-0.05-0.189-0.148-0.364-0.327-0.505c-0.13,0.188-0.2,0.346-0.259,0.49c-0.064,0.144-0.104,0.271-0.142,0.39 c-0.028,0.087-0.048,0.171-0.069,0.258c-0.745-0.004-1.609,0.87-1.969,1.7c-0.415,0.958-0.102,2.015,0.698,2.361 s1.784-0.15,2.197-1.108C16.586,8.359,16.479,7.066,15.926,6.508z"
            />
            <Path
              fill="white"
              d="M10.824,6.566c1.054,0.225,2.127-0.616,2.396-1.878c0.225-1.053-0.182-2.523-0.935-3.114 c0.027-0.055,0.062-0.107,0.079-0.165c0.061-0.199,0.062-0.405,0.008-0.594c-0.05-0.188-0.148-0.364-0.328-0.504 c-0.13,0.188-0.199,0.346-0.258,0.49c-0.064,0.144-0.104,0.271-0.142,0.39c-0.013,0.042-0.023,0.082-0.033,0.122 c-0.99-0.024-1.954,1.373-2.207,2.56C9.135,5.135,9.77,6.341,10.824,6.566z"
            />
            <Path
              fill="white"
              d="M6.147,6.631C7.291,6.539,8.13,5.355,8.021,3.985C7.917,2.679,6.81,1.068,5.715,0.996 C5.705,0.958,5.695,0.92,5.683,0.88C5.646,0.76,5.606,0.633,5.542,0.49C5.483,0.346,5.414,0.188,5.283,0 c-0.18,0.141-0.278,0.316-0.328,0.505C4.902,0.693,4.903,0.899,4.964,1.098c0.01,0.031,0.031,0.06,0.043,0.091 c-0.796,0.524-1.219,1.99-1.129,3.125C3.987,5.685,5.003,6.721,6.147,6.631z"
            />
            <Path
              fill="white"
              d="M3.783,7.789C3.504,6.685,2.33,5.466,1.377,5.532c-0.01-0.038-0.019-0.075-0.032-0.113 C1.308,5.3,1.269,5.172,1.205,5.028c-0.059-0.143-0.129-0.301-0.258-0.49C0.767,4.68,0.669,4.854,0.619,5.043 C0.565,5.232,0.567,5.439,0.627,5.638c0.021,0.07,0.06,0.136,0.097,0.202C0.139,6.43,0,7.733,0.24,8.684 c0.297,1.173,1.33,1.923,2.31,1.675C3.527,10.111,4.08,8.96,3.783,7.789z"
            />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
    </View>
    </View>

</ScrollView>


    )
}
const styles = StyleSheet.create({
    allPages: {
  backgroundColor:"white",
  padding:1,
  width:width,
  height:height,
  flexDirection:"column",
//   gap:5
    },
    animalImage:{
        width:width,
        height:height*0.35,
        backgroundColor:"#ffc368",

    }
 
  });
  



export default AdoptationDetails