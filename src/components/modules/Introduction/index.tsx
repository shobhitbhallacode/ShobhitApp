import React, { Component } from 'react'
import styles from './styles';
import { View, Text, Image, TextInput, TouchableHighlight } from 'react-native';

//carousel having issue
//import Carousel from 'react-native-carousel';
import { brandYellow } from '../../../../theme/Colors';
import { AuthNavProps } from '../../../core/ProductService/types/Routing/Routes';
export default function Introduction({ navigation }: AuthNavProps<"ResetPassword">) {
  const getSlides = () => {
    return [
      {
        image: null,
        title: 'Stop Browsing, Start Doing 1',
        description: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et. '
      },
      {
        image: null,
        title: 'Stop Browsing, Start Doing 2',
        description: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et. '
      },
      {
        image: null,
        title: 'Stop Browsing, Start Doing 3',
        description: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et. '
      }
    ]
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
        <TouchableHighlight style={[styles.button, styles.signInBtn]}>
          <Text style={[styles.buttonText]}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button]}>
          <Text style={[styles.buttonText]}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
