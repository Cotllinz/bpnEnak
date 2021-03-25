export default {
  methods: {
    AlertSuccesLogin() {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: 'Signed in successfully',
          text: `Hi! Welcome at Balikpapan Enak `,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    AlertErrorLogin(msg) {
      return new Promise((resolve, reject) => {
        this.$swal({
          title: msg,
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          text: 'Something went wrong!'
        })
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
