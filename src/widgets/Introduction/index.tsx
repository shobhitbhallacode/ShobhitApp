import React from 'react';
import styles from './styles';
import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import { brandYellow } from '../../../theme/Colors';
import { Link } from '@react-navigation/native';
var view =function(){
  let carouselProps = {
    animate : false,
    indicatorSize : 30,
    indicatorOffset : 20,
    inactiveIndicatorColor : '#d8d8d8',
    indicatorColor : brandYellow
  } 
  return (
      <View style={[styles.container]}>
        <View style={[styles.slides]}>
          <View style={styles.container}>
            {/* <Carousel {...carouselProps}>
              {
                this.getSlides().map((slide,index)=>{
                  return (
                    <View style={styles.slide} key={'slide'+index}>
                      <View style={styles.slideGraphics}/>
                      <Text style={[styles.slideTitle]}>{slide.title}</Text>
                      <Text style={[styles.slideDescription]}>{slide.description}</Text>
                    </View>
                  )
                })
              }
            </Carousel> */}
          </View>
        </View>
        <View style={[styles.actions]}>
          {/* <Link 
          text="Log In" 
          link="login"
           style={[styles.button,styles.signInBtn]} textStyle={[styles.buttonText,styles.black]}/>
          <Link text="Sign Up" link="signUp" style={[styles.button]} textStyle={[styles.buttonText,styles.black]}/> */}
        </View>
      </View>
  )
};