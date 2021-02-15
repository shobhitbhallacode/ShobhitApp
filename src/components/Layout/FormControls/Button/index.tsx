// import React from 'react';
// import styles from './styles';
// import {View,Text,TouchableHighlight} from 'react-native';

// export default class Button extends React.Component{
//     onPress(){
//         let {onPress} = this.props;
//         if(onPress){
//           onPress.apply(this,this.args);
//         }
//       }
// }
// const onPress=(props: any)=>{
//     let {onPress} = props;
//     if(onPress){
//       onPress.apply(this,this.args);
//     }
//   }
// export const Button = (props: any)=>{
// 	let {textStyle,style,text} = props;
// 	return (
// 		<TouchableHighlight underlayColor='transparent' onPress={onPress.bind(this)} style={[styles.container,style]}>
// 				<Text style={[styles.text,textStyle]}>{text}</Text>
// 		</TouchableHighlight>
// 	)
// }
// module.exports = view;
