import { createApp } from 'vue'
import App from './App.vue';
import router from './plugins/router/routes';
import './assets/styles/global.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faCamera, faPen, faTrash, faTimes, faCheckCircle, faTimesCircle, faInfoCircle, faExclamationCircle, faSortDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCloudversify } from '@fortawesome/free-brands-svg-icons';
import {faPenToSquare } from '@fortawesome/free-regular-svg-icons';


const icons = [
    faUserSecret,
    faCloudversify,
    faCamera,
    faPen,
    faTrash,
    faTimes,
    faCheckCircle,
    faTimesCircle,
    faInfoCircle,
    faExclamationCircle,
    faSortDown,
    faPlus
    
]


library.add(icons);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
