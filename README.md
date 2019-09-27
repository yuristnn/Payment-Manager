# Список платежей

Web приложение - личный кабинет с отображением списка платежей пользователя

## Для начала работы

* git clone https://github.com/yuristnn/Payment-Manager
* npm install
* npm start

## Структура каталогов и файлов

```
src
│ ├───App.jsx
│ └───index.jsx
│
├───components
│   │   └───InfoCard.jsx - Компонент всех данных платежа
│   │
│   ├───AddNewPayment
│   │   ├───AddNewPayment.jsx - Компонент добавления нового платежа
│   │   └───AddNewPaymentContainer.jsx
│   │
│   ├───Login
│   │   ├───Login.jsx - Компонент входа в список платежей
│   │   └───LoginContainer.jsx
│   │
│   ├───Payments
│   │   ├───Payments.jsx - Компонент отображения списка платежей
│   │   └───PaymentsContainer.jsx
│   │
│   └───SearchList
│       ├───SearchList.jsx - Компонент поиска по платежам
│       └───SearchListContainer.jsx
│
└───store
    ├───actionCreators.jsx
    ├───constants.jsx
    └───reducers.jsx
```

## Учетные записи для тестирования

* email - yuriy@test.ru, пароль - yuriytest
* email - maks@test.ru, пароль - makstest
