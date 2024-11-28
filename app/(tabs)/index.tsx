import React from "react";
import {View, ScrollView} from 'react-native';
// import SampleComponent from './samplecomponent';
// import StylingReactNativeComponent from './stylingreactnativecomponent';
import MateriFlexBox from "./materiflexbox";
import AppNavigator from '../../components/uts/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';;



function App() {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        <MateriFlexBox />
        {/* <NavigationContainer>
          <AppNavigator />;
        </NavigationContainer> */}
      </ScrollView>
    </View>
  );
}

export default App;