const isValidEmail = (email) => {
  const re = new RegExp("^[A-Za-z]\\w*?@[a-zA-Z_]+\\.[a-zA-Z]+$")
  return re.test(email)?true:false
}

export {isValidEmail}