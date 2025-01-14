<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      @click="toggleDialpad"
      class="h-8 p-2 flex items-center bg-green-400 justify-center hover:bg-green-100 lg:hover:bg-green-200 dark:hover:bg-green-700/50 dark:lg:hover:bg-green-800 rounded-full"
     
    >
    <svg t="1735613373605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4275" width="20" height="20"><path d="M170.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" opacity=".3" p-id="4276"></path><path d="M170.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4277"></path><path d="M426.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4278"></path><path d="M426.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4279"></path><path d="M682.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4280"></path><path d="M682.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4281"></path><path d="M170.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4282"></path><path d="M426.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4283"></path><path d="M682.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4284"></path></svg>
      <span class="ml-2">Bàn phím số</span>
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