import React, {useState} from "react";
import { BottomNavigation } from "react-native-paper";
import Arithmetic from "./Arithmetic";
import Carousel from "./Carousel";
import InsideLayout from "./InsideLayout";
import Transform from "./Transform";

export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'transform', title: 'Transform', icon: 'arrow-collapse-right'},
    {key: 'insideLayout', title: 'InsideLayout', icon: 'animation-play-outline'},
    {key: 'arithmetic', title: 'Arithmetic', icon: 'format-annotation-plus'},
    {key: 'carousel', title: 'Carousel', icon: 'border-vertical'},

  ])

  const renderScene = BottomNavigation.SceneMap({
    transform: Transform,
    insideLayout: InsideLayout,
    arithmetic: Arithmetic,
    carousel: Carousel
  })

  return (
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )

}