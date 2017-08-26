import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
} from 'react-native';//引用
 
class List extends Component {
   show(title) {
     alert(title);
   }//展示警告框
   render() {//渲染但没有return
     var news = [];
     for(var i in this.props.news){
       var text = (
         <View key={i} style={styles.list_item}>
           <Text
             onPress={this.show.bind(this, this.props.news[i])}
             numberOfLines={1}
             style={styles.list_item_font}>
             {this.props.news[i]}
           </Text>
         </View>
       );
       news.push(text);
     }
     return (
       <View style={styles.flex}>
         {news}
       </View>
     );
   }
 }
 
class Main extends Component {
   render() {
     var news = [
        'Swift - 滑块（UISlider）的用法',
        'Swift - 告警框（UIAlertView）的用法',
        'Swift - 选择框（UIPickerView）的用法',
        'Swift - 操作表（UIActionSheet）的用法',
        'Swift - 滚动视图（UIScrollView）的用法'
     ];
     return (
       <View style={styles.flex,{marginTop:35}}>
         <List news={news}></List>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
  flex:{
     flex:1
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font:{
    fontSize:16
  },
 });
 
 AppRegistry.registerComponent('appone', () => Main);