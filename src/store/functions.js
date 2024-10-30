
import { MENU_LIST, NAVLIST, THE_MENU } from "./constants"
import { orderList } from '@/store/order'

export function setHash (page) {
  window.location.hash = page
}

// funtion to set page hash
export function normalizePageHash () {
  const hash = window.location.hash.slice(1)

  if (Object.keys(NAVLIST).includes(hash)) {
    return hash
  }

  setHash(THE_MENU)
  return THE_MENU
}

// function to get random id
export function randomId () {
  return Math.ceil(Math.random()*1000000)
}

// to find accurate dish
export function orderData (item) {
  const { title, price } = MENU_LIST.find(elem => elem.id === item.dish_id)
  return {title, price}
}

// to sum total price
export function totalSum () {
  let total = 0
  orderList.value.forEach(element => total += orderData(element).price * element.count)
  return total
}
