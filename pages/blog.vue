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
      <section id="blog" class="flex">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          :src="require('~/assets/images/unslash-purple.jpg')"
          class="rounded flex"
        >
          <div class="py-12"></div>

          <v-container class="flex">
            <h2
              class="display-2 font-weight-bold mb-3 text-uppercase text-center"
            >
              Блог
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row class="flex">
              <v-col
                v-for="({ body, title }, i) in posts"
                :key="i"
                cols="12"
                class="flex"
                md="4"
              ><h3>Урок</h3>
                <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
                ></h3>

                <div
                  class="title flex font-weight-light mb-5"
                  v-text="body"
                ></div>

                <v-btn class="ml-n4 font-weight-black" text>
                  Погрузиться
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
  async asyncData({params, $http}) {
    const posts = await $http.$get(`http://127.0.0.1:8000/api/v1/posts`)
    return {...posts}
  },
}
</script>
