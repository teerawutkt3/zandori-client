export default {
  confirmDelete() {
    return {
      title: "ยืนยัน",
      text: "การลบข้อมูล",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "ตกลง",
      confirmButtonColor: "red",
      cancelButtonText: "ยกเลิก",
      icon: "warning",
      showCloseButton: true
    };
  },
  confirmLogout() {
    return {
      // title: 'ยืนยัน',
      text: "ออกจากระบบ",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#1d6047",
      cancelButtonText: "ยกเลิก",
      icon: "warning"
    };
  },
  alertSuccess() {
    return {
      title: "สำเร็จ",
      text: "ทำรายการสำเร็จ",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#1d6047",
      icon: "success"
    };
  },

  alertValidateForm() {
    return {
      title: "แจ้งเตือน",
      text: "กรอกข้อมูลไม่ครบ",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#1d6047",
      icon: "warning"
    };
  }
};
