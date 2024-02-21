<template>
  <v-app>
    <h1>Formulario VUE</h1>
    <v-container>
      <!-- Layout con Grid -->
      <v-row class="d-flex justify-center">
        <!-- Columna del formulario -->
        <v-col cols="12" md="6">
          <v-form @submit.prevent="insertData">
            <v-text-field label="Nombre " v-model="form.Nombre" dense></v-text-field>
            <v-text-field label="Apellidos " v-model="form.Apellidos" dense></v-text-field>
            <v-text-field label="Fecha de Nacimiento " v-model="form.FechaNacimiento" type="date" dense></v-text-field>
            <v-text-field label="Imagen URL" v-model="form.Img" dense></v-text-field>
            <v-btn type="submit" color="primary" class="mt-3">Insertar</v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-row style="margin-top: 20px;">
      </v-row>
      <v-row>
        <!-- Columna de la tabla -->
        <v-col >
          <v-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"   style="width: 25%; font-weight: bold;">Nombre</th>
                  <th class="text-left"   style="width: 25%; font-weight: bold;">Apellidos</th>
                  <th class="text-left"   style="width: 25%; font-weight: bold;">Fecha de Nacimiento</th>
                  <th class="text-center" style="width: 25%; font-weight: bold;">Imagen</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in datos" :key="index">
                  <td class="text-left" style="width: 25%;">{{ item.Nombre }}</td>
                  <td class="text-left" style="width: 25%;">{{ item.Apellidos }}</td>
                  <td class="text-left" style="width: 25%;">{{ item.FechaNacimiento }}</td>
                  <td class="text-left" style="width: 25%;"><v-img @error="item.Apellidos='er'" :src="item.Img" aspect-ratio="1.7" max-height="100"></v-img></td>                
                </tr>
              </tbody>
            </template>

          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>





<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../conexions/supabase';
const datos = ref([]);
const form = ref({
  Nombre: '',
  Apellidos: '',
  FechaNacimiento: '',
  Img: '',
});

// Función para cargar los datos desde Supabase
async function fetchData() {
  const { data, error } = await supabase
    .from('DatosFormulario')
    .select('*');

  if (error) {
    console.error('Error', error);
  } else {
    datos.value = data;
  }
}

// Función para insertar los datos en Supabase
async function insertData() {
  const { error } = await supabase
    .from('DatosFormulario')
    .insert([form.value]);

  if (error) {
    console.error('Error al insertar:', error);
  } else {
    // Resetea el formulario
    form.value = { Nombre: '', Apellidos: '', FechaNacimiento: '', Img: '' };
    // Recarga los datos para incluir el nuevo registro
    await fetchData();
  

  }
}



// Invoca fetchData después de que el componente se haya montado
onMounted(fetchData);
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
