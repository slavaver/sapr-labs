---
title: Изображения
description: Лабораторная работа №4 - Изображения
sidebar:
  order: 6
---

**Цель:** изучить форматы изображений, получить первоначальные навыки оптимизации изображений, работы с фонами, градиентами и тенями.

![svg meme](/img/svg.jpg)

## Порядок выполнения лабораторной работы:

### Теория

1. изучить основные форматы изображений:
   - jpeg,
   - webp,
   - avif,
   - png,
   - svg;
2. изучить сценарии использования форматов изображений; ![how to choose image format](/img/format.jpg)
3. изучить свойства для замещающего контента (img/video): object-fit и object-position;
4. Как добавлять фон и использовать свойства из background:
5. градиенты: linear, radial;
6. тени для элементов box-shadow;

### Практика

1. Из макета в Figma экспортировать изображения в подходящем формате.
2. Два изображения оптимизировать с помощью squoosh.app.
3. Изображения добавить к проекту в папку img или images.
4. В index.html в тегах img проставить корректные относительные пути до изображений.
5. При необходимости в css используйте свойства object-fit или object-position.
6. При наличии фоновых изображений, добавьте их к элементам с помощью background-image. Также для элементов с фоновыми изображениями обязательно добавить цвет (background-color).
7. Добавьте использование теней, если они требуются по дизайну, если таких элементов нет - добавьте тень для элемента, который выглядит как кнопка.
8. Добавьте градиенты по дизайну, если нет, то для крупного текста сделайте буквы с градиентом.
9. Зафиксировать результаты работы с помощью системы контроля версий git и отправить репозиторий на Github.

### Экспорт изображений из Figma

Выберите изображение в макете и посмотрите, как оно выглядит в слоях в левой панели.

Если в слоях показывается иконка пейзажа (пример ниже), то это изображение в макете хранится в растровом формате и его нет смысла экспортировать в векторном.

![](/img/rastr-layer.png)

Если в иконках отображаются конкретные фигуры и в именах слоев встречаются Vector или описания фигур (пример ниже), то в макете это заложено кривыми и их стоит экспортировать в векторном формате. Если иконка состоит из нескольких фигур/слоев, выбирайте слой объединяющий их.

![](/img/vector-layer.png)

Далее в правой панели в Design, внизу есть раздел Export. В нем ваша задача выбрать подходящий формат.

![](/img/export-panel.png)

Растровые изображения можно оптимизировать с помощью [squoosh](https://squoosh.app/), а векторные - [svg omg](https://jakearchibald.github.io/svgomg/).

## Пример решения с волнами

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="eYqwQYq" data-pen-title="Wave in sections" data-user="slavaver" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/slavaver/pen/eYqwQYq">
  Wave in sections</a> by Vereschagin Vladislav (<a href="https://codepen.io/slavaver">@slavaver</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Требования к коду:

1. Отсутствие ошибок на [валидаторе](https://validator.w3.org/) для html и css;
1. Код отформатирован.
1. Использованы правильные форматы изображений.

## Результаты выполнения лабораторной работы

Статическая веб-страница на хостинге, со структурой, которая соответствует требованиям и сохранена в системе контроля версий.

## Дополнительные источники

- Про тег [\<img\>](https://doka.guide/html/img/)
- Оптимизация изображений - [squoosh.app](https://squoosh.app)
- [Все о background](https://www.freecodecamp.org/news/learn-css-background-properties/)
- [Тени с котиками](https://www.freecodecamp.org/news/css-box-shadow-property-with-examples/)
- [Все о градиентах](https://css-tricks.com/css3-gradients/)
  - [MDN: linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
  - [MDN: radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)

## Вопросы для защиты

1. Какие два способа формирования изображений вы знаете?
1. В чем разница между двумя способами формирования изображений?
1. Какие форматы изображений вы знаете?
1. Для чего подходит _какой-то формат_?
1. Когда полезны object-fit и object-position?
1. Что сокращает свойство background?
1. Какое свойство надо использовать если требуется только задать цвет фона?
1. Можно ли добавлять несколько фонов на один элемент?
1. Какими параметрами можно управлять у тени?
1. Чем отличается линейный и конический градиенты?
