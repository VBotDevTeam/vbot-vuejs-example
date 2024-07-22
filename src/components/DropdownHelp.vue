<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      @click="toggleDialpad"
      class="h-8 p-2 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full"
      :class="{ 'bg-gray-200 dark:bg-gray-800': showDialpad }"
    >
      Bàn phím số
    </button>
  </div>
</template>

<script>
import { ref, watch, getCurrentInstance } from 'vue'

export default {
  name: 'Dialpad',
  props: ['align'],
  setup() {
    const showDialpad = ref(true)
    const { proxy } = getCurrentInstance()

    const toggleDialpad = () => {
      console.log('toggleDialpad được gọi')
      showDialpad.value = !showDialpad.value
      try {
        const client = proxy.$getVBotClient()
        if (client) {
          console.log('client.showDialpad', showDialpad.value)
          client.showDialpad(showDialpad.value)
        } else {
          console.error('VBotClient không được tìm thấy')
        }
      } catch (error) {
        console.error('Lỗi khi gọi showDialpad:', error)
      }
    }

    watch(showDialpad, (newValue) => {
      console.log('showDialpad đã thay đổi:', newValue)
    })

    return {
      showDialpad,
      toggleDialpad
    }
  }
}
</script>