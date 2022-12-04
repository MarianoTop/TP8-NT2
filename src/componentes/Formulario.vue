<template>
  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <h2>Pantalla de Formulario</h2>
      <hr />
      <hr />
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
          />
          <!-- cartel de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>
            <!---Pareceria no tener sentido el mensaje dado que evita ingresar mayor cantidad-->
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo no debe poseer más de {{ nombreMaxLength }} caracteres.
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- ------------------------------------------------------- -->
        <!-- Campo edad -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input
            id="edad"
            class="form-control"
            type="number"
            v-model.number="formData.edad"
            required
            name="edad"
            autocomplete="off"
            :min="edadMin"
            :max="edadMax"
          />
          <!-- cartel de validación -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- ------------------------------------------------------- -->
        <!-- Campo email -->
        <validate tag="div">
          <label for="email">Email</label>
          <input
            id="email"
            class="form-control"
            type="email"
            v-model="formData.email"
            required
            name="email"
            autocomplete="off"
          />
          <!-- cartel de validación -->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-1">
              Debe ingresar un email válido
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- ------------------------------------------------------- -->
        <!-- Botón de envío -->
        <button class="btn btn-success my-3" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "src-componentes-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,     
      url: 'https://6366a10cf5f549f052ca15a9.mockapi.io/datosTP7',
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
        
      };
    },    
        enviar() {
        console.log({...this.formData})
        this.postProducto()
        this.formData = this.getInitialData()
            this.formState._reset()
      },
     async postProducto() {

        /*
        this.axios.post(this.url, this.formData, { 'content-type' : 'application/json' })
        .then( response=> console.log(response)
        ).catch(error =>  console.error('ERROR en postProducto', error))
          */
        
        try {
          console.log("URL: " + this.url)
          console.log("Usuario: " + this.formData)
          this.formData.edad = parseInt(this.formData.edad)
          let response = await this.axios.post(this.url, this.formData, { 'content-type' : 'application/json' })
          console.log(response)
        }
        catch(error) {
           console.error('ERROR en postProducto', error)
        }
      
      },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: red;
  color: white;
}

hr {
  background-color: black;
}
</style>
