import './style/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// components global
import InputBase from '@s/components/InputBase.vue'
import InputSelect from '@s/components/InputSelect.vue'
import BtnBase from '@s/components/BtnBase.vue'
import ModalAlert from '@s/components/ModalAlert.vue'
import tableData from '@s/components/tableData.vue'

app.use(createPinia())
app.use(router)
app.component('InputBase', InputBase)
app.component('InputSelect', InputSelect)
app.component('BtnBase', BtnBase)
app.component('ModalAlert', ModalAlert)
app.component('tableData', tableData)

app.mount('#app')
