---
title: Pseudo и анимации
description: Лабораторная работа №9 - Псевдоклассы, псевдоэлементы и анимации
sidebar:
  order: 12
---

**Цель:** изучить псевдоклассы и псевдоэлементы, получить навыки стилизации элементов, используя псевдоклассы и псевдоэлементы; изучить свойства css для создания переходов, преобразований и анимаций, овладеть навыками работы с ними.

## Изучить

- Псевдоклассы: \:root, \:link, \:visited, \:hover, \:active, \:focus, Псевдоклассы группы child, Псевдоклассы группы type, \:checked, \:disabled, \:enabled, \:required, \:placeholder-shown;
- Псевдоэлементы: \:\:before, \:\:after, \:\:placeholder, \:\:marker, \:\:selection, \:\:first-letter;
- transform;
- transition;
- animation и keyframes;
- примеры их использования.

## Сделать

В index.html:

- замените стандартное выделение (\:\:selection) под цвет макета;
- оформите поля формы (цвета, шрифты, размеры);
- стилизуйте подсказки (\:\:placeholder) в полях;
- для ссылок и кнопок создайте стили с псевдоклассами \:hover, \:active, \:focus;
- для элементов, у которых заданы стили с псевдоклассом \:hover добавьте плавное изменение свойств через transition (масштабирование и поворот кнопки при наведении с добавлением тени и изменением цветов фона и текста);
- в одном из списков измените стили для четных или нечетных элементов;

В form.html:

- логотип в футере (если его нет, то добавьте) поверните на 30 градусов, увеличьте элемент в 1,5 раза, добавьте перекос (skew) элемента по горизонтали и вертикали.
- для текста у отмеченных радиокнопок и чекбоксов измените оформление;
- стилизуйте поля, обязательные для заполнения;

Зафиксируйте результаты работы с помощью системы контроля версий git и отправить репозиторий на GitVerse.

## Требования к коду

1. Отсутствие ошибок на [валидаторе](https://validator.w3.org/) для html и css.
1. Код отформатирован и читаем.
1. Страница должна соответствовать принципам адаптивной верстки:
   - Не появляется горизонтальная полоса прокрутки.
   - При изменении ширины экрана от 320px до 2560px макет адекватно перестраивается;
   - Изображения адаптивны и изменяют свой размер;
   - Текст читаем на любых устройствах.

## Результаты выполнения лабораторной работы

Результат работы зафиксирован в системе контроля версий git и отправлен на Gitverse.

## Дополнительные источники

- [MDN: Псевдоклассы и псевдоэлементы](https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

### Псевдоклассы

- [Doka](https://doka.guide/css/pseudoclasses/)
- [MDN](https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-classes)

### Псевдоэлементы

- [Doka](https://doka.guide/css/pseudoelements/)
- [MDN](https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements)
- [CSS-Tricks](https://css-tricks.com/pseudo-element-roundup/)

### Переходы

- [CSS transitions](https://www.joshwcomeau.com/animation/css-transitions/)

### Анимации

- [Doka](https://doka.guide/css/animation/)
- [MDN](https://developer.mozilla.org/ru/docs/Web/CSS/animation)
- [Создание ключевых кадров](https://keyframes.app/animate/)

### Идеи и вдохновение

- [Пример преподавателя на codepen](https://codepen.io/slavaver/pen/yLZKpPw)
- [Пример поиска на codepen](https://codepen.io/search/pens?q=marquee), но разбирайтесь как там все работает.
