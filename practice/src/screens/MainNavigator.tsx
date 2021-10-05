import React, {useState} from "react";
import { BottomNavigation } from "react-native-paper";
import Arithmetic from "./Arithmetic";
import Carousel from "./Carousel";
import InsideLayout from "./InsideLayout";
import Transform from "./Transform";
import Sequence from './Sequence'
import Parallel from "./Parallel";
import Stagger from "./Stagger";
import EnterExit from "./EnterExit";
import Drag from "./Drag";
import LeftSwipe from "./LeftSwipe";
import PanRes from "./PanRes";

export default function MainNavigator() {
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'drag', title: 'Drag', icon: 'drag'},
    {key: 'leftSwipe', title: 'LeftSwipe', icon: 'drag-horizontal'},
    {key: 'panRes', title: 'PanRes', icon: 'arrow-expand-right'},
  ])

  const renderScene = BottomNavigation.SceneMap({
    drag: Drag,
    leftSwipe: LeftSwipe,
    panRes: PanRes,
  })

  return (
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )

}