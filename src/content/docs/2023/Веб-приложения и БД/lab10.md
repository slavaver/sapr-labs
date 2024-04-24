---
title: "Валидация на стороне клиента"
description: "Валидация на стороне клиента"
sidebar:
  order: 11
---

**Цель**: познакомиться с понятиями идентификации, аутентификации и авторизации. Реализовать аутентификацию основанную на сессиях.

## Содержание и порядок выполнения лабораторной работы:

1. Изучить:

   - объектную модель документа DOM;
   - способы получения элементов или списков элементов из дерева;
   - работу со свойствами и методами элементов дерева;
   - редактирование текстового содержимого объектов;
   - управление стилями элементов и классами;
   - события и объект `event`;
   - добавление обработчиков событий и работа с объектом `event`;
   - фазы жизненного цикла события;
   - возможности Fetch API (`fetch()`, `Response`);

1. Продолжить работу на ветке предыдущей работы.
1. Добавить к проекту статическую страницу comment.html и файлы validate.js и fetch.js.
1. В файле comment.html должна быть форма для отправки комментария. К этому документу подключены и validate.js и fetch.js.
1. В файле validate.js реализована валидация для полей форм. Готовое решение с разбором есть в статье [Мгновенная валидация форм]
(https://doka.guide/recipes/validation/)
1. Файл validate.js подключите и к формам в login и signup. В них валидация также должна работать.
1. В fetch.js, который подключается к comment.html, реализуйте отправку данных в формате JSON с помощью fetch API.
1. Провести ручное тестирование в браузере.
1. Отформатировать документы.
1. Убедиться, что нет замечаний от ESLint.
1. Зафиксировать результаты работы с помощью системы контроля версий git на github.

## Требования к коду:

HTML код валиден.
Отсутствуют ошибки в wave.webaim.org и lighthouse по критерию доступности.
Отсутствуют ошибки ESLint в панели Problems в VS Code.
Отсутствуют ошибки в консоли браузера при работе с веб-страницей.
Отсутствуют анонимные функции при использовании метода .addEventListener().

## Результаты выполнения лабораторной работы:

Работающий локально сервер с логикой, которая соответствует требованиям. Код отформатирован, не содержит ошибок и замечаний от статического анализа кода ESLint, сохранен в системе контроля версий.

## Источники

- [Атрибут novalidate](https://doka.guide/html/novalidate/)
- [Доступные формы - doka.guide](https://doka.guide/a11y/accessible-forms/)
- [doka - fetch()](https://doka.guide/js/fetch/)
- [Form Validation web.dev](https://web.dev/learn/forms/validation?hl=ru)
- [Form Validation MDN](https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation)
- [Progressively Enhanced Form Validation, Part 1: HTML and CSS](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/)
- [Progressively Enhanced Form Validation, Part 2: Layering in JavaScript](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-2-layering-in-javascript/)
- [«Современный учебник JavaScript»](https://learn.javascript.ru/)
- [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/)

## Вопросы для защиты

1. Что такое DOM?
1. Какие есть способы получения элементов из DOM?
1. Примеры методов у элементов DOM.
1. Что такое событие?
1. Как добавить обработчик события?
1. Назовите фазы жизненного цикла события.
1. Для чего нужен preventDefault()?
1. Почему требуется проверять данные на стороне клиента?
1. Какие атрибуты полей форм можно использовать для добавления ограничений?
1. Что делает атрибут novalidate для формы?
1. На базе чего построен Fetch API?
1. Какие есть свойства и методы у объекта Response?
1. Как получить данные из тела запроса?
1. Какие параметры у функции fetch?