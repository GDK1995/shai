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

export function clearingOrder () {
  orderList.value = []
}

export function deleteOrderItem (id) {
  const objIndex = orderList.value.findIndex(element => element.id === id)
  orderList.value.splice(objIndex, 1)
}

export const isConfirmed = ref(false)

export function confirmOrder() {
  isConfirmed.value = true
}

export const isDone = ref(false)

export function doneOrder() {
  isDone.value = true
}

export function doneOrderFalse() {
  isDone.value = false
}

export const prepeare = ref('w-0')

export function prepAct() {
  prepeare.value = prepeare.value === 'w-1/2' ? 'w-full' : 'w-1/2'
}

export function resetPrep() {
  prepeare.value = 'w-0'
}

export function pay() {
  isConfirmed.value = false

  resetPrep()

  doneOrderFalse()

  clearingOrder()
}
