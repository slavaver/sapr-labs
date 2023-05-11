# Лабораторная работа №9

CRUD операции в MongoDB и обработка ошибок

**Цель**: изучить набор методов клиента MongoDB для выполнения CRUD операций, получить навыки написания промежуточного ПО для централизованной обработки ошибок.

## Содержание и порядок выполнения лабораторной работы

1. К базе данных добавить две новые коллекции. Первая коллекция для хранения ключей API, вторая для хранения информации о моделях.
1. В документах API ключей должна храниться информация о самом ключе и имя пользователя для идентификации.
1. В документах о модели должны храниться поля: имя пользователя, имя модели, тип модели, сам объект в виде json, описание, список комментариев, время создания документа и изменения.
1. Для получения ключа API есть конечная точка (end point) обрабатывающая post запрос, где в теле запроса передается имя пользователя. При обработке этого запроса создается новый документ в коллекции ключей API.
1. Для удаления ключа есть конечная точка (end point) обрабатывающая delete запрос, требуется проверить наличие api ключа в заголовках запроса и если такой заголовок есть и ключ есть в бд, то удалить этот документ.
1. Реализуйте CRUD операции для моделей.
1. Доступные для всех конечные точки:
   - GET /models - получение списка всех моделей. Возвращается только id и имя модели. db.collection.find(query, projection);
   - GET /models/:id - получение всей информации о конкретной модели по id db.collection.findOne({});
1. Требующие авторизации по API ключу:

   - POST /models - добавление новой модели db.collection.insertOne({});
   - PUT /models/:id - обновление модели. В теле отправляются все данные о ней, обновляется время в поле о времени изменения. db.collection.updateOne(filter, update);
   - DELETE /models/:id - удаление конкретной модели по id db.collection.deleteOne({});

1. Создайте глобальное промежуточное ПО для централизованной обработки ошибок вашего приложения. Обновите контроллеры, чтобы они вызывали next с объектом ошибки. Объект ошибки создается с помощью new Error('Сообщение об ошибке'). Где осуществляется вызов асинхронных функций добавьте блоки try-catch и в блоке catch можно осуществить вызов next(error);
1. Новый функционал добавьте в новую версию API.
1. Описание не обновляйте. Оно будет сделано в следующей лабораторной работе.
1. Обновите .http для тестирования новых запросов.

## Результаты выполнения лабораторной работы:

Работающий локально сервер с подключением к бд и логикой, которая соответствует требованиям. Код сохранен в системе контроля версий.

## Источники

1. [Официальная документация MongoDB](https://www.mongodb.com/docs/manual/)
1. [Онлайн-руководство по MongoDB](https://metanit.com/nosql/mongodb/)
1. [Документация драйвера под Node](https://www.mongodb.com/docs/drivers/node/current/)

## Вопросы

1. Что такое CRUD
1. Какие методы используются в mondodb для CRUD.
1. Какие параметры есть у методов для работы с документами в mondodb.
1. Как реализуется и работает обработка ошибок с помощью промежуточного ПО.
1. Объект Error в JS.