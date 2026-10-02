---
title: Flexbox
description: Лабораторная работа №5 - Flexbox
sidebar:
  order: 7
---

**Цель:** изучить принципы работы flexbox и его свойств, получить навыки использования flexbox при верстке макета.

## Изучить

Изучите общие принципы работы flexbox:

- flex-контейнер и flex-элементы;
- главная и поперечная оси;
- изменение направления осей;
- выравнивание элементов;
- управление размерами элементов.

## Сделать

Скройте заголовки и текст в `label`, которые отсутствуют по дизайну в макете. Для этого используйте класс `sr-only` (он ниже в коде). Возможно потребуется использовать обертку в виде `<span>`, чтобы правило действовало именно на текстовое содержимое у полей ввода.

Добавьте `display: flex` на родителя для расположения элементов в нем, там где не хватает аккуратного расположения элементов в строку. Если для решения этой задачи не хватает группирующего элемента, то добавляйте `div`. Используйте необходимые свойства для контейнера и элементов для их выравнивания, расположения и управления размерами.

> **не злоупотребляйте** использованием flexbox.
> Где расположение элементов соответствует стандартному потоку работайте с margin/padding.

Зафиксируйте результаты работы с помощью системы контроля версий git и отправить репозиторий на GitVerse.

### Полезный класс sr-only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
```

## Требования к коду:

1. Выполнены все пункты задания.
1. Отсутствуют ошибки на [валидаторе](https://validator.w3.org/) для html и css.
1. Код отформатирован и читаем.
1. Оптимально задействован flexbox и стандартный поток.
1. Использованы правильные форматы изображений.

## Результаты выполнения лабораторной работы

Результат работы зафиксирован в системе контроля версий git и отправлен на Gitverse.

## Дополнительные источники

1. [Гайд по flexbox](https://doka.guide/css/flexbox-guide/)
1. [Flexbox MDN](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox)
1. [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
1. [Digging Into the Flex Property](https://ishadeed.com/article/css-flex-property/)
1. [Building Website Headers with CSS Flexbox](https://ishadeed.com/article/website-headers-flexbox/)
1. [Шпаргалка по flexbox](https://dev.to/joyshaheb/flexbox-cheat-sheets-in-2021-css-2021-3edl)
1. Игры для тренировки:
   1. [Froggy](http://flexboxfroggy.com/)
   1. [Defence](http://www.flexboxdefense.com/)
1. [Flexbox](https://semicolon.dev/tutorial/css/complete-css-flex-tutorial)
