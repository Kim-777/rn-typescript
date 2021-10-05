import React from 'react';
import type {FC} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, useTheme} from 'react-native-paper';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar, LeftSwipe} from '../components';
import {View as ThemeView} from '../theme/paper';
import {styles} from './Person.style';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonLeftSwipe: FC<PersonProps> = ({person, deletePressed}) => {
  const {colors} = useTheme();

  return (
    <LeftSwipe>
      <View style={[styles.view]}>
        <View style={[styles.leftView]}>
          <Avatar
            imageStyle={[styles.avatar]}
            uri={person.avatar}
            size={50}
            onPress={() => {}}
          />
          <Text style={[styles.text]}>Press Me</Text>
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
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={[styles.text, styles.comments]}>
            {person.comments}
          </Text>
          <Image style={[styles.image]} source={{uri: person.image}} />
          <View style={[styles.countsView]}>
            <Icon name="comment" size={24} color={Colors.blue500} />
            <Icon name="twitter-retweet" size={24} color={Colors.purple500} />
            <Icon name="comment" size={24} color={Colors.red500} />
          </View>
        </View>
      </View>
    </LeftSwipe>
  );
};

export default PersonLeftSwipe;
