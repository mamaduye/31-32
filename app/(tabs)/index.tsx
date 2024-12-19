import React from "react";
import {View, ScrollView} from 'react-native';
// import SampleComponent from './samplecomponent';
// import StylingReactNativeComponent from './stylingreactnativecomponent';
import MateriFlexBox from "./materiflexbox";
import LocalAPI from "@/components/localAPI";
import CallAPIAxios from "./CallAPIAxios";



function App() {
  return (
    <ScrollView>
      <LocalAPI />
        <CallAPIAxios />

     
    </ScrollView>
  );
}

export default App;