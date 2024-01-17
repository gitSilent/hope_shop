import validatePhone from "./validatePhone";

// Функция проверки валидности телефонного номера
export function checkValidationPhone(phone:string):boolean{

    let validatedPhone = validatePhone(phone) 
    if(!validatedPhone){
        return false
    }else{
        return true
    }
  }
