export default {
  methods: {
    createFilter(queryString) {
      return (invoiceAccount) => {
        return (
          invoiceAccount.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    querySearch(key, queryString, cb) {
      const invoiceAccountHistory = this.getInvoiceAccountHistory(key);
      const results = queryString
        ? invoiceAccountHistory.filter(this.createFilter(queryString))
        : invoiceAccountHistory;
      cb(results);
    },
    // 渲染历史记录
    getInvoiceAccountHistory(key) {
      const searchWordArray = JSON.parse(localStorage.getItem(key));
      if (!searchWordArray) return;
      const invoiceAccountHistory = [];
      for (let i = 0; i < searchWordArray.length; i++) {
        const item = {
          value: searchWordArray[i],
          label: searchWordArray[i],
        };
        invoiceAccountHistory.push(item);
      }
      return invoiceAccountHistory;
    },
    // 历史记录存放
    setLocalHistory(keys, value) {
      const searchWordArray = JSON.parse(localStorage.getItem(keys));
      if (searchWordArray) {
        // searchWordArray = searchWordArray.split(',')
        if (searchWordArray.indexOf(value) === -1) {
          if (!value) return [];
          searchWordArray.unshift(value);
        }
        if (searchWordArray.length > 6) {
          searchWordArray.pop();
        }
      } else {
        return localStorage.setItem(keys, JSON.stringify([value]));
      }

      localStorage.setItem(keys, JSON.stringify(searchWordArray));
    },
  },
};
