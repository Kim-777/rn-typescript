import React, { useMemo } from 'react';
import type {FC} from 'react';
import * as D from '../data';
import moment from 'moment-with-locales-es6';
import { Colors } from 'react-native-paper'
import DragAvatar from './DragAvatar'
import {View} from '../theme/paper'

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void
};

const PersonDrag: FC<PersonProps> = ({person, deletePressed}) => {
  
  const colors = useMemo(() => [Colors.pink500, Colors.yellow500, Colors.lime500, Colors.lightBlue500], [])
  const circles = useMemo(() => colors.map((color, index) => {
    return (
      <DragAvatar key={index} size={70} backgroundColor={color}/>
    )
  }), [])

  return (
    <View style={{flex: 1, height: 600}}>
      {circles}
    </View>
  );
};

export default PersonDrag;
