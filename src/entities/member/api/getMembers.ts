'use server'

import { Members } from '../types/member'
import axiosServerInstance from '@/shared/model/serverNetwork'

const getMembers = async (storeId: string): Promise<Members> => {
  try {
    const { data } = await axiosServerInstance.get(`/v1/stores/${storeId}/relations/members`)
    return data
  } catch (e) {
    console.error(e)
    return []
  }
}
export default getMembers
