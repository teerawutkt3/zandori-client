import HttpRequest from "../../config/httpRequest"
import BlockUiUtils from "../utils/BlockUiUtiils"
import swal from "sweetalert2"
// import NotificationUtils from "@/common/utils/NotificationUtils";
const message401 = {
	title: "401",
	description: "Unauthorized",
	icon: "error"
}
// const message405 = {
//   title: "405",
//   description: "Method not allowed",
//   icon: "error"
// };
// const messageError = {
//   title: "Error",
//   description: "",
//   icon: "error"
// };

class AxiosService extends HttpRequest {
	doGet(path) {
		BlockUiUtils.blockUi()
		if (this.getIsDebug()) {
			console.log("=============================")
			console.log("Path: ", this.getBaseUrl() + path)
			console.log("Method Type: GET ")
			console.log("=============================")
		}
		return new Promise((resolve, reject) => {
			this.get(path, {})
				.then(res => {
					// if (res.data.status === 'SUCCESS') {
					resolve(res.data)
					// } else {
					//   this.handleErrProcess(res.data)
					// }
				})
				.catch(err => {
					console.log("get catch", err)

					this.handleErr(err, reject)
				})
				.finally(() => {
					BlockUiUtils.unBlockUi()
				})
		})
	}

	doPost(path, data) {
		BlockUiUtils.blockUi()
		if (this.getIsDebug()) {
			console.log("=============================")
			console.log("Path: ", this.getBaseUrl() + path)
			console.log("Method Type: POST")
			console.log("Params: ", data)
			console.log("=============================")
		}
		return new Promise((resolve, reject) => {
			this.post(path, data)
				.then(res => {
					// if (res.data.status === 'SUCCESS') {
					resolve(res.data)
					// } else {
					//   this.handleErrProcess(res.data)
					// }
				})
				.catch(err => {
					this.handleErr(err, reject)
				})
				.finally(() => {
					BlockUiUtils.unBlockUi()
				})
		})
	}

	doPut(path, data) {
		BlockUiUtils.blockUi()
		if (this.getIsDebug()) {
			console.log("=============================")
			console.log("Path: ", this.getBaseUrl() + path)
			console.log("Method Type: PUT")
			console.log("Params: ", data)
			console.log("=============================")
		}
		return new Promise((resolve, reject) => {
			this.put(path, data)
				.then(res => {
					// if (res.data.status === 'SUCCESS') {
					resolve(res.data)
					// } else {
					//   this.handleErrProcess(res.data)
					// }
				})
				.catch(err => {
					this.handleErr(err, reject)
				})
				.finally(() => {
					BlockUiUtils.unBlockUi()
				})
		})
	}

	doDelete(path) {
		BlockUiUtils.blockUi()
		if (this.getIsDebug()) {
			console.log("=============================")
			console.log("Path: ", this.getBaseUrl() + path)
			console.log("Method Type: DELETE")
			console.log("=============================")
		}
		return new Promise((resolve, reject) => {
			this.delete(path)
				.then(res => {
					// if (res.data.status === 'SUCCESS') {
					resolve(res.data)
					// } else {
					//   console.log('get err', res.data)
					//   this.handleErrProcess(res.data)
					// }
				})
				.catch(err => {
					this.handleErr(err, reject)
				})
				.finally(() => {
					BlockUiUtils.unBlockUi()
				})
		})
	}

	handleErrProcess(err) {
		if (this.getIsDebug()) {
			console.log("handleErrProcess ", err)
		}
		// NotificationUtils.notiSuccess(err.message);
		// swal.fire({
		//   title: messageError.title,
		//   text: err.message,
		//   buttonsStyling: false,
		//   confirmButtonClass: 'btn btn-danger',
		//   icon: 'error'
		// })
		BlockUiUtils.unBlockUi()
	}

	handleErr(err, reject) {
		if (this.getIsDebug()) {
			console.log("handleErr", err)
		}
		if (err.response === undefined) {
			// NotificationUtils.notiDanger(err + err.message);
			// swal.fire({
			//   title: messageError.title,
			//   text: err,
			//   buttonsStyling: false,
			//   confirmButtonClass: 'btn btn-danger',
			//   icon: 'error'
			// })
		} else if (err.response.status === 401) {
			// eslint-disable-next-line no-console
			console.log(message401.title + message401.description)
			// this.router.push({path:'/login'})
			localStorage.removeItem("profile")
			localStorage.removeItem("appToken")
			// window.location.href = '/#/login'
			reject("401")
		} else if (err.response.status === 405) {
			// NotificationUtils.notiDanger(
			//   message405.title + "<br>" + message405.description
			// );
			// swal.fire({
			//   title: message405.title,
			//   text: message405.description,
			//   buttonsStyling: false,
			//   confirmButtonClass: 'btn btn-danger',
			//   icon: 'error'
			// })
			reject("405")
		} else {
			// swal.fire({
			//   title: messageError.title,
			//   text: err,
			//   buttonsStyling: false,
			//   confirmButtonClass: 'btn btn-danger',
			//   icon: 'error'
			// })
			// NotificationUtils.notiDanger(err);
			reject(err)
		}
		BlockUiUtils.unBlockUi()
	}

	processErr(msg) {
		swal("Process error", msg, "error")
	}
}

export default AxiosService
