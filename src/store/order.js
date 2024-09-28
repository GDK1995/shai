import { ref, reactive } from 'vue'
import { randomId } from '../store/functions'
import { ORDER_RESET } from '../store/constants'

export const orderList = ref([])

export let orderItem = reactive({ ...ORDER_RESET })

export function addOrder(orderItem, id) {
  orderItem.id = randomId()
  orderItem.dish_id = id

  const includedIndex = orderList.value.findIndex((element) => element.dish_id === orderItem.dish_id)

  includedIndex === -1 ? orderList.value.push(orderItem) : orderList.value[includedIndex].count += orderItem.count

  clearingOrderItem()
}

export function clearingOrderItem () {
  orderItem = reactive({ ...ORDER_RESET })
}

export function deleteOrderItem (id) {
  const objIndex = orderList.value.findIndex(element => element.id === id)
  orderList.value.splice(objIndex, 1)
}
