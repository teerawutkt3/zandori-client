// TYPE
// primary: 0
// info: 1
// success: 2
// warning: 3
// danger: 4
export default {
  noti(icon, message, color, timeout) {
    if (process.browser) {
      // eslint-disable-next-line no-undef
      demo.noti(icon, message, color, timeout);
    }
  },
  notiSuccess(message) {
    this.noti(
      "",
      '<br><i class="fa fa-check"></i> ' + message + "<br><br>",
      2,
      4000
    );
  },
  notiDanger(message) {
    this.noti(
      "",
      '<br><i class="fa fa-times"></i> ' + message + "<br><br>",
      4,
      10000
    );
  }
};
