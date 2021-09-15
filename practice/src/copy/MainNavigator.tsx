import React, { useState, useMemo } from "react";
import { BottomNavigation } from "react-native-paper";
import Arithmetic from "./Arithmetic";
import Transform from "./Transform";
import Carousel from "./Carousel";
import InsideLayout from "./InsideLayout";


export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0);

  const routes = useMemo(() => [

  ],[])

  const renderScene = BottomNavigation.SceneMap({

  })

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )

}