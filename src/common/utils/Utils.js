export default {
  isNotBlank(value) {
    if (Array.isArray(value)) {
      return value.length !== 0;
    }
    return (
      value !== undefined && value !== "" && value != null && value !== "null"
    );
  },
  isBlank(value) {
    return !this.isNotBlank(value);
  },
  formatPrice(value) {
    const val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  },
  isNew(value) {
    return value != null && value !== 0 && value !== undefined;
  },
  isNotNew(value) {
    return !this.isNew(value);
  }
};
