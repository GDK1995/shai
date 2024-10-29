import { NAVLIST } from "@/store/constants"

export function isPageValidator (activePage) {
  return Object.keys(NAVLIST).includes(activePage)
}

export function isDishObjectValidate ({ title, price }) {
  return isString(title) && isNumber(price)
}

export function isOrderObjectValidate ({ count, dish_id }) {
  return isNumber(dish_id) && isCounterValid(count)
}

export function isCounterValid (count) {
  return isNumber(count) && numberMore(count)
}

export function isNumber (val) {
  return typeof val === 'number'
}

function isString (val) {
  return typeof val === 'string'
}

function numberMore (number) {
  return number > 0
}
