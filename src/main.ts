/**
 * Copyright (c) 2021 reiya0104 (Student)
 * This software is released under the MIT License, see LICENSE.
 */

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.scss'

createApp(App).use(router).mount('#app')
