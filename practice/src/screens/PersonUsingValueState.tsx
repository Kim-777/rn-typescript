import React, { useCallback, useState } from 'react';
import type {FC} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import {Avatar, IconText} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native-paper'


moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const PersonUsingValueState: FC<PersonProps> = ({person}) => {
  
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed'), [])
  const deletePressed = useCallback(() => Alert.alert('deleted pressed'), []);
  
  const [comment, setComment] = useState<number>(person.counts.comment)
  const [retweet, setRetweet] = useState<number>(person.counts.retweet)
  const [heart, setHeart] = useState<number>(person.counts.heart);

  const clickComment = useCallback(() => {
    setComment(prev => prev + 1)
  }, [])

  const clickRetweet = useCallback(() => {
    setRetweet(prev => prev + 1)
  }, [])

  const clickHeart = useCallback(() => {
    setHeart(prev => prev + 1)
  }, [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
        <Image style={[styles.image]} source={{uri: person.image}}/>
        <View style={[styles.countsView]}>
          <IconText viewStyle={[styles.touchableIcon]} onPress={clickComment} name="comment" size={24} color={Colors.blue500} textStyle={[styles.iconText]} text={comment} />
          <IconText viewStyle={[styles.touchableIcon]} onPress={clickRetweet} name="twitter-retweet" size={24} color={Colors.purple500} textStyle={[styles.iconText]} text={retweet} />
          <IconText viewStyle={[styles.touchableIcon]} onPress={clickHeart} name="heart" size={24} color={Colors.purple500} textStyle={[styles.iconText]} text={heart} />
        </View>
      </View>
    </View>
  );
};

export default PersonUsingValueState;
