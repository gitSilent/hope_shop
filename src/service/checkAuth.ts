// Функция проверки авторизации пользователя
export default function checkAuth():boolean{
    let jwtToken = document.cookie.replace(/(?:(?:^|.*;\s*)hope_shop_jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return jwtToken ? true : false
}