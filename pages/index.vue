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
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                    ]"
                    class="font-weight-light"
                  >
                    Учить арабский сегодня.
                  </span>

                  <br />

                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                    ]"
                    class="font-weight-black"
                  >
                    Ara_lang
                  </span>
                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  data-cy="everyday"
                  outlined
                  @click="$vuetify.goTo('/everyday')"
                >
                  На каждый день
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-row>
      </section>

      <section id="about">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Знакомство</h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            Набор оригинальных и переведённых с английского языка постов для
            изучения арабского языка
          </v-responsive>

          <v-btn color="grey" href="#look-throw" large outlined>
            <span class="grey--text text--darken-1 font-weight-bold">
              Обзор
            </span>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="grammarEssentials">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          :src="require('~/assets/images/purple-to-red-gradient.jpg')"
          class="rounded"
        >
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">Грамматика</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ title, text }, i) in grammarEssentials"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card class="py-12 px-4" color="grey lighten-5" flat>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="title"
                  ></v-card-title>

                  <v-card-text class="subtitle-1" v-text="text"
                    >Средний уровень
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </v-parallax>
      </section>

      <section id="stats">
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                ></div>

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="blog">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          :src="require('~/assets/images/unslash-purple.jpg')"
          class="rounded"
        >
          <div class="py-12"></div>

          <v-container>
            <v-col data-cy="blog-col" @click="$vuetify.goTo('/blog')">
              <h2
                class="display-2 font-weight-bold mb-3 text-uppercase text-center"
              >
                Блог
              </h2>
              <v-btn
                class="align-self-end"
                fab
                data-cy="blog"
                outlined
                @click="$router.push('/blog')"
              >
                изучать шаг за шагом
              </v-btn>
            </v-col>

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
      <v-sheet id="contact" color="#333333" dark tag="section" tile>
        <div class="py-12"></div>

        <v-container>
          <h2
            class="display-2 font-weight-bold mb-3 text-uppercase text-center"
          >
            <strong>Сообщить</strong> разработчикам желаемое
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider class="feedback" light>
            <v-form
              v-model="valid"
              data-cy="fb-form"
              method="post"
              @submit.prevent="formSubmit"
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="name"
                    data-cy="fb-name"
                    flat
                    label="Имя*"
                    placeholder="name"
                    :rules="nameRules"
                    required
                    solo
                    type="text"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    data-cy="fb-email"
                    flat
                    label="Email*"
                    placeholder="email"
                    :rules="emailRules"
                    required
                    solo
                    type="email"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="subject"
                    data-cy="fb-subject"
                    flat
                    label="По поводу*"
                    placeholder="subject"
                    required
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="message"
                    data-cy="fb-message"
                    placeholder="message"
                    required
                    flat
                    label="Сообщить о том, что*"
                    solo
                  ></v-textarea>
                </v-col>

                <v-col class="mx-auto" cols="auto">
                  <v-btn
                    color="accent"
                    data-cy="fb-submit"
                    type="submit"
                    x-large
                  >
                    Сообщить в Ara_lang
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
            <div data-cy="fb-all">
              <strong>Feedback</strong>
              {{ output }}
            </div>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-main>

    <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        На основе шаблона Copyright {{ new Date().getFullYear() }} — Vuetify,
        Made with Love by John Leider
      </div>
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
