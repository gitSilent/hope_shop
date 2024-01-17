// Функция, добавляющая минуты к заданной дате и возвращающая ее в международном формате
export function addMinutes(date:Date, minutes:number) {
    date.setMinutes(date.getMinutes() + minutes);
    return date.toUTCString();
  }
