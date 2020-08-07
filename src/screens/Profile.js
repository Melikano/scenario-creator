//@flow

import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getMultipleData, getSingleData} from '../utils/localStorageUtils';
import ScenarioListItem from '../components/ScenarioListItem';
import ProfileAvatar from '../components/ProfileAvatar';
import SharedHeader from '../sharedComponents/Header';
import Strings from '../constants/Strings';

type Props = {};
const Profile = (props: Props) => {
  const navigation = useNavigation();
  const [scenarios, setScenarios] = useState([]);
  const [user, setUser] = useState({});

  const getInitialData = async () => {
    const userData = await getSingleData('user');
    const scenariosData = await getMultipleData('scenario');
    setUser(userData);
    setScenarios(scenariosData);
  };
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        getInitialData();
      };
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
        //$FlowFixMe
        ListHeaderComponent={<ProfileAvatar user={user} />}
      />
    </View>
  );
};

export default Profile;
