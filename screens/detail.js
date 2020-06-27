import React, { Component } from 'react';
import { View, Text , TouchableOpacity , ScrollView , TextInput} from 'react-native';

//this component is used to show the detail of seller 
export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={{margin: 10 , flex: 1}}>
	      <ScrollView>
        {
	      	this.props.route.params.item &&	
	      	<View>
    				<View>
    					<Text style={{marginTop: 5}}> Name </Text>
    					<TextInput editable = {false} style={{color: "red",height: 40,borderRadius: 20 , borderColor: 'gray', borderWidth: 1 , paddingLeft: 15 , paddingRight: 15 , paddingTop: 8 , paddingBottom: 8 , marginTop: 5 , marginLeft: 2 , marginRight: 2}} value={this.props.route.params.item.name}/>
    				</View>
    				<View>
    					<Text style={{marginTop: 5}}> Location </Text>
    					<TextInput editable = {false} style={{color: "red",height: 40, borderRadius: 20 ,  borderColor: 'gray', borderWidth: 1 , paddingLeft: 15 , paddingRight: 15 , paddingTop: 8 , paddingBottom: 8 , marginTop: 5 , marginLeft: 2 , marginRight: 2}} value={this.props.route.params.item.location}/>
    				</View>
    				<View>
    					<Text style={{marginTop: 5}}> Available Time </Text>
    					<TextInput editable = {false} style={{color: "red",height: 40, borderRadius: 20 , borderColor: 'gray', borderWidth: 1 , paddingLeft: 15 , paddingRight: 15 , paddingTop: 8 , paddingBottom: 8 , marginTop: 5 , marginLeft: 2 , marginRight: 2}} value={this.props.route.params.item.fromTime + " to " + this.props.route.params.item.toTime}/>
    				</View>
            <View>
              <Text style={{marginTop: 5}}> Appointements </Text>
              {
                this.props.route.params.item.appointement.length > 0
                  ?
                  <View>
                      {
                        this.props && this.props.route.params.item.appointement.map((item , index) => (
                          <View key={index} style={{flexDirection:"row" , borderWidth:1, paddingLeft: 15 , paddingRight: 15 , paddingTop: 8 , paddingBottom: 8 , marginTop: 5 , marginLeft: 2 , marginRight: 2 ,borderColor:"grey", height: 40, borderRadius: 20 }}>
                            <View style={{flex:2}}>
                              <Text style={{textAlign:"center" , color: "red"}}>{index+1}</Text>
                            </View>
                            <View style={{flex:6}}>
                              <Text style={{textAlign:"left" , color: "red"}}>{item.appointee_name}</Text>
                            </View>
                            <View style={{flex:1}}>
                              <Text style={{textAlign:"center" , color: "red"}}>{item.fromTime}</Text>
                            </View>
                            <View style={{flex:1}}>
                              <Text style={{textAlign:"center" , color: "red"}}> to </Text>
                            </View>
                            <View style={{flex:1}}>
                              <Text style={{textAlign:"center" , color: "red"}}>{item.toTime}</Text>
                            </View>  
                          </View>

                        ))
                      }
                  </View>
                  :
                  <View style={{ borderWidth:1, paddingLeft: 15 , paddingRight: 15 , paddingTop: 8 , paddingBottom: 8 , marginTop: 5 , marginLeft: 2 , marginRight: 2 ,borderColor:"grey", height: 40, borderRadius: 20 }}>
                    <Text style={{color: "red"}}>Click a button to add appointement</Text>
                  </View>
              }
            </View>
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sellers List')}} style={{flex:2}}>
                <Text style={{ backgroundColor: '#f4511e' , height:40 , marginTop: 14 ,textAlign: "center" , color:"white" , fontSize:15 , paddingTop: 10, paddingBottom: 10,  paddingLeft: 15 , paddingRight:15 , borderRadius: 30}}> Go Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add Appointement' , {item: this.props.route.params.item})}} style={{flex:2}}>
                <Text style={{backgroundColor: '#f4511e' , height: 40 , marginTop: 14 ,textAlign: "center" , color:"white" , fontSize:15 , paddingTop: 10, paddingBottom: 10,  paddingLeft: 15 , paddingRight:15 , borderRadius: 30}}>Add Appointement</Text>
              </TouchableOpacity>
            </View>
    			</View>
	      }
	     </ScrollView>
	    </View>
    );
  }
}
