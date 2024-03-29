import { ref } from 'vue'
import { defineStore } from 'pinia'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<wxLoginRes>()

    // 保存会员信息，登录时使用
    const setProfile = (val: wxLoginRes) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile
    }
  },
  {
    persist: {
      storage: {
        setItem: (key: string, value: string) => {
          uni.setStorageSync(key, value)
        },
        getItem: (key: string) => {
          return uni.getStorageSync(key)
        }
      }
    }
  }
)
