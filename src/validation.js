export const isEmpty = (string) => {
  if (string.trim().length > 0) {
    return false
  }
  else { 
    return true
  }
}  
export const validEmail = (email) => {
  const re = new RegExp("^[A-Za-z]\\w*?@[a-zA-Z_]+\\.[a-zA-Z]+$")
  if (re.test(email)) {
    return true 
  }
  else {
    return false
  }
}
export const validNum = (number) => {
  const re = new RegExp("^+[0-9]{1,3}[\s][0-9]{10}$")
  if (re.test(number)) {
    return true
  }
  else {
    return false
  }
}
export const matchPass = (pass1, pass2) => {
  if (pass1.length > 8 && pass1 === pass2) {
    return true
  }
  else {
    return false
  }
}

export const validuser = (username) => {
  return true
}

export const availuser = (username) => {
  return true
}

export const passcheck = (pass) => {
  return true 
}