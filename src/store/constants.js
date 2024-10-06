export const NAVLIST = {
  menu: 'Меню',
  order: 'Заказ',
  payment: 'Оплата'
}

export const THE_MENU = 'menu'

export const THE_ORDER = 'order'

export const THE_PAYMENT = 'payment'

export const CURRENCY = 'тг.'

export const TOTAL_TEXT = 'Итого'

export const ORDER_TEXT = 'Заказ'

export const INGREDIENTS_TEXT = 'Ингредиенты'

export const PRICE_TEXT = 'Цена'

export const EXCLUDE_TEXT = 'исключить'

export const Q_DO_YOU_HAVE_ALLERGY = 'Есть аллергия на ингредиенты?'

export const MENU_LIST = [{
  id: 0,
  photo: 'juicy-cheeseburger.jpg',
  title: 'Чизбургер',
  ingredients: 'Булочка для гамбургеров, говядина, кетчуп, майонез, помидор, огурцы маринованные, сыр Чеддер',
  price: 2990
},
{
  id: 1,
  photo: 'lobster-seafood.jpg',
  title: 'Лобстер',
  ingredients: 'Омары, зеленый лук, белое сухое вино, молоко, сыр грюйер, петрушка, лимон, пшеничная мука',
  price: 6800
},
{
  id: 2,
  photo: 'pasta-arrangement.jpg',
  title: 'Паста',
  ingredients: 'Паста, грибы, шпинат, лимон, пармезан, петрушка, перец, оливковое масло, говядина',
  price: 2200
},
{
  id: 3,
  photo: 'shrimps-mussels-pizza.jpg',
  title: 'Пицца',
  ingredients: 'Креветки, помидор, моцарелло, чеснок, лимон, петружка, перец, сливочное масло',
  price: 4300
},
{
  id: 4,
  photo: 'tacos-arrangement.jpg',
  title: 'Тако',
  ingredients: 'Куриное филе, кукурузные лепешки, лук, томаты, фасоль, огурец, зеленый салат, сыр, укроп, петрушка, соевый соус',
  price: 1900
}]

// for empty texts
export const DONT_YET_ORDER_ANYTHING = 'А Вы еще ничего не выбрали...'

export const ANYTHING_TO_PAY = 'Нет счета для оплаты. Подтвердите заказ...'

// for button text
export const CONFIRM_ORDER = 'Подтвердить заказ'

export const ADD_ORDER = 'Добавить заказ'

export const PAY_ORDER = 'Оплатить'

// to reset vars
export const ORDER_RESET = {
  id: null,
  excludedIngredients: '',
  count: 1,
  dish_id: null
}

// payment
export const PAYMENT_SUCCESS = 'Оплата прошла успешно!'

export const NEED_TO_PAY = 'К оплате'

export const QR_SIZE = 200

export const CASH_RECEIPT = 'Кассовый чек'

export const NAME_DISH = 'Название блюда'

export const PRICE_DISH = 'Сумма блюда'
