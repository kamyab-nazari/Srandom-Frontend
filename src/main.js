/* import core vue */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* core scss */
import './styles/main.scss'

/* import bootstrap */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

/* Other Packages */
import notifications from '@kyvg/vue3-notification'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faCirclePlay,
  faMusic,
  faEye,
  faHeart,
  faRotateRight,
  faPlus,
  faCircleXmark,
  faHeartCrack,
  faFan
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCirclePlay, faMusic, faEye, faHeart, faRotateRight, faPlus, faCircleXmark, faHeartCrack, faFan)

const app = createApp(App)
app.use(router)
app.use(notifications)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
