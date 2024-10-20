
import { MENU_LIST } from "./constants"
import { orderList } from '@/store/order'

export function randomId () {
  return Math.ceil(Math.random()*1000000)
}

export function orderData (item) {
  const { title, price } = MENU_LIST.find(elem => elem.id === item.dish_id)
  return {title, price}
}

export function totalSum () {
  let total = 0
  orderList.value.forEach(element => total += orderData(element).price * element.count)
  return total
}
