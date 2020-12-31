<template>
  <v-app>
    <v-app-bar app color="#e0e0e0" height="100">
      <v-toolbar-title class="font-weight-black headline">
        <strong>Ara</strong>bic <strong>lang</strong>uage
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <section id="first-look">
        <v-row no-gutters>
          <v-theme-provider dark>
            <v-container fill-height>
              <v-card-title
                >Рады вас видеть в &nbsp;<strong>блоге</strong></v-card-title
              >
            </v-container>
          </v-theme-provider>
        </v-row>
      </section>
      <section id="blog">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          :src="require('~/assets/images/unslash-purple.jpg')"
          class="rounded"
        >
          <div class="py-12"></div>

          <v-container>
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              Блог
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ text, title }, i) in articles"
                :key="i"
                cols="12"
                md="4"
              >
                <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
                ></h3>

                <div class="title font-weight-light mb-5" v-text="text"></div>

                <v-btn class="ml-n4 font-weight-black" text>
                  Возможно, вы найдёте полезным
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </v-parallax>
      </section>
    </v-main>

    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      ></div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    message: '',
    subject: '',
    email: '',
    output: '',
    nameRules: [
      (v) => !!v || 'Мы бы иметь представление о том, кто отправляет сообщение',
      (v) => v.length > 2 || 'Мы не знаем людей длиной имени менее двух букв',
    ],
    emailRules: [
      (v) =>
        !!v ||
        'Мы бы иметь представление о том, с чьей почты отправляется сообщение',
      (v) => /.+@.+\..+/.test(v) || 'Только настоящий email',
    ],
  }),
  methods: {
    formSubmit(e) {
      e.preventDefault()
      const feedback = this

      this.axios
        .post('/api/v1/feedback', {
          name: this.name,
          message: this.message,
          subject: this.subject,
          email: this.email,
        })
        .then(function (response) {
          this.router.push({ path: '/' })
          feedback.output = response.data
        })
        .catch(function (error) {
          feedback.output = error
        })
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
