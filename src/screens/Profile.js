//@flow

import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getData} from '../utils/localStorageUtils';
import ScenarioListItem from '../components/ScenarioListItem';
import {user} from '../constants/mockUser';
import ProfileAvatar from '../components/ProfileAvatar';
import SharedHeader from '../sharedComponents/Header';
import Strings from '../constants/Strings';

type Props = {};
const Profile = (props: Props) => {
  const navigation = useNavigation();
  const [scenarios, setScenarios] = useState([]);
  const getScenarios = async () => {
    const data = await getData();
    setScenarios(data);
  };
  useFocusEffect(
    React.useCallback(() => {
      return () => getScenarios();
    }, []),
  );
  return (
    <View>
      <SharedHeader title={Strings.myScenarios} showBack={false} />
      <FlatList
        data={scenarios}
        renderItem={({item}) => {
          return <ScenarioListItem scenario={item} navigation={navigation} />;
        }}
        keyExtractor={item => `${item.name}-${item.dateCreated}`}
        ListHeaderComponent={<ProfileAvatar user={user} />}
      />
    </View>
  );
};

export default Profile;
