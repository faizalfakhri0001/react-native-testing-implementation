import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './navigations'

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Router