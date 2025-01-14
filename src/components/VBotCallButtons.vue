<template>
    <div class="flex items-center space-x-3">
          <div class="flex items-center flex-row">            
            <button ref="trigger" @click="openDialPad" id="customCallBtn" class="flex flex-row h-9 focus:outline-none text-white bg-VBotcolor-50 hover:bg-VBotcolor-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              <svg t="1735613373605" class="icon mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4275" width="20" height="20"><path d="M170.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" opacity=".3" p-id="4276"></path><path d="M170.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4277"></path><path d="M426.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4278"></path><path d="M426.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4279"></path><path d="M682.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4280"></path><path d="M682.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4281"></path><path d="M170.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4282"></path><path d="M426.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4283"></path><path d="M682.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#ffffff" p-id="4284"></path></svg>
              <span>Bàn phím</span>
            </button>
            <button ref="trigger" id="clickToCallBtn" @click="clickToCall('0362774xxx')" class="flex flex-row h-9 focus:outline-none text-white bg-VBotcolor-50 hover:bg-VBotcolor-100 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <svg t="1736826541657" class="icon mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4270" width="20" height="20"><path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.52 387.52 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z" fill="#ffffff" p-id="4271"></path></svg>
                <span>Bấm để gọi</span>
            </button>                     
          </div>          
        </div>
</template>

<script>

export default {
  name: 'VBotCallButtons',
  props: [
    
  ],
  components: {
   
  },
  methods: {
    openDialPad() {
      this.$VBotWebCall.openDialPad();
    },
    clickToCall(phone){
      this.$VBotWebCall.makeCall(phone);
    },
  },
  setup() {
    
  }  
}
</script>