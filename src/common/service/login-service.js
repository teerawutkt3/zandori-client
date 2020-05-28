/* eslint-disable no-console */
import axios from 'axios'
import swal from 'sweetalert2'
import HttpRequest from '../../httpRequest'
import AxiosService from './axios-service'
const axiosService = new AxiosService()
class LoginService extends HttpRequest {
	doLogin (pathName, data) {
		if (this.getIsDebug()) {
			console.log('Path: ', pathName)
			console.log('Params: ', data)
		}
		return new Promise((resolve) => {
			axios.post(this.getBaseUrl() + pathName, data).then((res) => {
				if (this.getIsDebug()) { console.log('doLogin : ', res.data.data.token) }

				if (process.browser) {
					localStorage.setItem('appToken', res.data.data.token)
				}

				resolve(res.data)
			}).catch((err) => {
				swal.fire({
					title: 'Login Error!',
					text: 'Check Username and Password',
					buttonsStyling: false,
					confirmButtonClass: 'btn btn-danger',
					icon: 'error'
				})
				if (this.getIsDebug()) { console.log('err login : ', err) }
			})
		})
	}

	getProfile () {
		if (axiosService.getIsDebug) { console.log('getProfile...') }
		return new Promise((resolve) => {
			this.get('/api/ums/user/profile', {}).then((res) => {
				resolve(res.data)
			}).catch((err) => {
				if (process.browser) {
					localStorage.removeItem('appToken')
				}
				//   this.$router.push({path: '/auth'})
				window.location.href = '/#/login'
				if (axiosService.getIsDebug()) {
					console.log('errd: ', err)
					console.log("errd: can't get profile!")
				}
			})
		})
	}
}

export default LoginService
