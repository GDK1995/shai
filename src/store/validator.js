import { NAVLIST } from "@/store/constants"

export function isPageValidator (activePage) {
  return Object.keys(NAVLIST).includes(activePage)
}

export function isDishObjectValidate ({ title, price }) {
  return (isString(title) && isNumber(price)) || (isUndefined(title) && isUndefined(price))
}

export function isOrderObjectValidate ({ count, dish_id }) {
  return isNumber(dish_id) && isCounterValid(count)
}

export function isCounterValid (count) {
  return isNumber(count) && numberMore(count)
}

export function isNumber (value) {
  return typeof value === 'number'
}

function isString (value) {
  return typeof value === 'string'
}

function numberMore (number) {
  return number > 0
}

function isUndefined(value) {
  return value === undefined
}
