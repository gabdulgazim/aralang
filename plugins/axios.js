// import * as $axios from '@nuxtjs/axios'
// //
//
// export default function ({ store }, inject) {
//   // export default function ({ $axios, store }, inject) {
//   // const $axios = new axios()
//   // use laravel port
//   $axios.defaults.baseURL =
//     window.location.protocol + '//' + window.location.hostname + ':8000'
//
//   const emailApi = $axios.create()
//
//   // const token = store.state.currentUser.token
//   // emailApi.setToken(token, 'Bearer')
//
//   emailApi.onResponse((response) => {
//     if (response.status === 404) {
//       console.log('Oh no it returned a 404')
//     }
//   })
//
//   inject('emailApi', emailApi)
// }
