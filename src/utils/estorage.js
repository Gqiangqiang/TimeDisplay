const Storage = {
  /**
   * @param {String} key 要存的键
   * @param {any} value 要存的值
   */
  setItem: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * @param {String} key Storage中存的key
   */
  getItem: (key) => {
    if (typeof(key) !== 'string') {
      throw "getItem的key应该是String类型"
    }
    let item = window.localStorage.getItem(key)
    return JSON.parse(item)
  },
  removeItem: (key) => {
    if (typeof(key) !== 'string') {
      throw "getItem的key应该是String类型"
    }
    window.localStorage.removeItem(key)
  }
}

export default Storage
