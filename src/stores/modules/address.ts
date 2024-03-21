import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<UserAddressItem>()

  const handleSelectAddress = (address: UserAddressItem) => {
    selectedAddress.value = address
  }

  const handleClearAddress = () => {
    selectedAddress.value = undefined
  }

  return {
    selectedAddress,
    handleClearAddress,
    handleSelectAddress
  }
})
