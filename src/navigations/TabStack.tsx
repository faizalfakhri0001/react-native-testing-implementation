import React from 'react'
import { TabParamList } from 'types/navigations';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Live, NewProduct, Notification, Recommendation, Video } from 'pages';
import { Color } from 'config';
import { Header } from 'components/molecules';

const Tab = createBottomTabNavigator<TabParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Recommendation"
      backBehavior="history"
    >
      <Tab.Screen
        name="Recommendation"
        component={Recommendation}
        options={() => {
          return {
            title:"Rekomendasi",
            ...getCommonTabOption('thumb-up-outline')
          }
        }}
      />

      <Tab.Screen
        name="NewProduct"
        component={NewProduct}
        options={({navigation}) => {
          return {
            title: "Produk Baru",
            // headerLeft: (props) => <BackButton {...props} navigation={navigation}/>,
            ...getCommonTabOption('tag-outline')
          }
        }}
      />

      <Tab.Screen
        name="Live"
        component={Live}
        options={({navigation}) => {
          return {
            title: "Live",
            ...getCommonTabOption('video-outline')
          }
        }}
      />

      <Tab.Screen
        name="Video"
        component={Video}
        options={({navigation}) => {
          return {
            title:"Video",
            ...getCommonTabOption('play-outline')
          }
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={({navigation}) => {
          return {
            title:"Notifikasi",
            ...getCommonTabOption('bell-outline')
          }
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={({navigation}) => {
          return {
            title:"Saya",
            ...getCommonTabOption('account-outline')
          }
        }}
      />
    </Tab.Navigator>
  )
}

function getCommonTabOption(iconName: string): BottomTabNavigationOptions {
  return {
    tabBarIcon: ({focused}) => {
      return <Icon name={iconName} size={28} color={focused ? Color.orange : 'gray'}/>
    },
    headerStyle:{
      height: 72,
    },
    tabBarLabelStyle: {
      fontSize: 8,
    },
    tabBarActiveTintColor: Color.orange,
    tabBarInactiveTintColor: 'gray',
    headerShadowVisible: false,
    headerTitleStyle: {fontSize: 16},
    headerTitleAlign: 'center',
    headerLeftLabelVisible:true,
  }
}

export default TabStack