//@flow

import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getMultipleData} from '../utils/localStorageUtils';
import ScenarioListItem from '../components/ScenarioListItem';
import ProfileAvatar from '../components/ProfileAvatar';
import SharedHeader from '../sharedComponents/Header';
import Strings from '../constants/Strings';
import Colors from '../constants/Colors';

type Props = {route: any};
const Profile = ({route}: Props) => {
  const {user} = route.params;
  const navigation = useNavigation();
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
      const scenariosData = await getMultipleData('scenario');
      setScenarios(scenariosData);
    };
    getInitialData();
    console.log('effect');
  }, []);

  // useFocusEffect(() => {
  //   const getInitialData = async () => {
  //     const scenariosData = await getMultipleData('scenario');
  //     setScenarios(scenariosData);
  //   };
  //   getInitialData();
  //   console.log('focuse');
  // }, [scenarios]);
  return (
    <View style={{marginBottom: 120, backgroundColor: Colors.white}}>
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
