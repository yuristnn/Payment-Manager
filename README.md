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
│   ├───Login
│   │   ├───Login.jsx - Компонент входа в список платежей
│   │   ├───LoginContainer.jsx
│   │   └───common
│   │           └───styles.jsx
│   └───Payments
│       ├───common
│       │       └───styles.jsx
│       │
│       ├───Payments.jsx - Компонент отображения списка платежей
│       ├───PaymentsContainer.jsx
│       │
│       ├───AddNewPayment
│       │   ├───AddNewPayment.jsx - Компонент добавления нового платежа
│       │   ├───AddNewPaymentContainer.jsx
│       │   └───common
│       │           └───styles.jsx
│       │
│       ├───ControlPanel
│       │   ├───ControlPanel.jsx - Компонент с фильтрацией, сортировкой и поиском
│       │   ├───ControlPanelContainer.jsx
│       │   └───common
│       │           └───styles.jsx
│       │
│       ├───Header
│       │   ├───Header.jsx - Компонент отображения e-mail, баланса и кнопки выхода
│       │   ├───HeaderContainer.jsx
│       │   └───common
│       │           └───styles.jsx
│       │
│       ├───InfoCard
│       │   ├───InfoCard.jsx - Компонент отображения всей информации о платеже
│       │   ├───InfoCardContainer.jsx
│       │   └───common
│       │           └───styles.jsx
│       │
│       └───SearchList
│           ├───SearchList.jsx - Компонент поиска по платежам
│           ├───SearchListContainer.jsx
│           └───common
│                   └───styles.jsx
└───store
        actionCreators.jsx
        constants.jsx
        reducers.jsx
```

## Учетные записи для тестирования

* email - yuriy@test.ru, пароль - yuriytest
* email - maks@test.ru, пароль - makstest
