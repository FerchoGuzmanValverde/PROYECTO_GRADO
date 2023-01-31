
function authUser() {
    const token = localStorage.getItem('user')
    return token
}

export default authUser