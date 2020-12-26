import React, { useContext } from 'react'
import { RootStoreContext } from '../store/RootStoreContext'


const useConfigStore = () => {
  const { ConfigStore } = useContext(RootStoreContext);
  return ConfigStore;
}

export default useConfigStore
