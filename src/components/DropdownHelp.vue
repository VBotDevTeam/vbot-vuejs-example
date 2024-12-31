<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      @click="toggleDialpad"
      class="btn bg-green-500 text-gray-100 hover:bg-green-800 dark:bg-green-400 dark:text-gray-100 dark:hover:bg-white"
    >
    <svg t="1735611722254" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2554" width="20" height="20"><path d="M170.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" opacity=".3" p-id="2555"></path><path d="M170.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2556"></path><path d="M426.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2557"></path><path d="M426.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2558"></path><path d="M682.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2559"></path><path d="M682.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2560"></path><path d="M170.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2561"></path><path d="M426.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2562"></path><path d="M682.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="2563"></path></svg>
      <span class="ml-2 font-semibold">Dialpad</span>
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