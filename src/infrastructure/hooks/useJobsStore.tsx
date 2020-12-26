import React, { useContext } from 'react'
import { RootStoreContext } from '../store/RootStoreContext'


const useJobsStore = () => {
  const { JobsStore } = useContext(RootStoreContext);
  return JobsStore;
}

export default useJobsStore
