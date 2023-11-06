import { users } from "./mockData.js"
import { isRequired, isValidEmail, isValidPassword } from "./validate.js"

if (!localStorage.users) {
    localStorage.users = JSON.stringify(users)
}


const formData = document.getElementById('form-data')


formData.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const usernameErr = document.getElementById('username-error')
    const passwordErr = document.getElementById('password-error')

    //reset lại form 
    usernameErr.innerText = ''
    passwordErr.innerText = ''

    if (!isRequired(email)) {
        usernameErr.innerText = "Email không được để trống"
    } else {
        if (!isValidEmail(email)) {
            usernameErr.innerText = "Email không hợp lệ"
        }
    }

    if (!isRequired(password)) {
        passwordErr.innerText = "Password không được để trống"
    } else {
        if (!isValidPassword(password)) {
            passwordErr.innerText = "Password không hợp lệ"
        }
    }


    // Kiểm tra thông tin nhập vào có trong mảng không 
})