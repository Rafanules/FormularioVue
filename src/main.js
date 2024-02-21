import { createApp } from 'vue';
import App from './App.vue';
import { VBtn, VTextField, VForm, VRow, VCol, VTable } from 'vuetify/components';
import vuetify from './plugins/vuetify.js';
import 'vuetify/styles'



const app = createApp(App);

// Registra componentes específicos globalmente
app.component('VBtn', VBtn);
app.component('VTextField', VTextField);
app.component('VForm', VForm);
app.component('VRow', VRow);
app.component('VCol', VCol);
app.component('VTable', VTable);


// Asegúrate de usar Vuetify con app.use(vuetify) como ya tienes configurado
app.use(vuetify);

app.mount('#app');
