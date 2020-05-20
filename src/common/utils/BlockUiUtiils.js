import jQuery from "jquery";
const $ = jQuery;
const openClass = "is-open";
export default {
  blockUi() {
    if (process.browser) {
      $(document).ready(function() {
        $(".overlay01").addClass(openClass);
        $(".overlay-close").addClass(openClass);
      });
    }
  },
  unBlockUi() {
    if (process.browser) {
      $(document).ready(function() {
        $(".overlay01").removeClass(openClass);
        $(".overlay-close").removeClass(openClass);
      });
    }
  }
};
