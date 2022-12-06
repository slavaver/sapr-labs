# Flexbox, Адаптивная верстка

## Лабораторная работа №4

**Цель:** изучить принципы работы flexbox и его свойства, изучить основы отзывчивой верстки (RWD).

### Порядок выполнения лабораторной работы:

1. Изучить общие принципы работы flexbox:

   - что есть flex-контейнер и flex-элементы;
   - главная и поперечная оси;
   - изменение направления осей;
   - выравнивание элементов;
   - управление размерами элементов;

1. Изучить основы адаптивной верстки:

   - принцип mobile-first;
   - создание и использование медиа-запросов;
   - типы устройств;
   - метатег viewport;
   - шаблоны поведения макета;

1. Выполнение:
   - добавить, где требуется группирующую обертку в виде элемента `div` с классом `wrapper`. Его код приведен ниже.
   - скрыть заголовки и текст в `label`, которые отсутствуют по дизайну с помощью класса `sr-only`. Его код приведен ниже.
   - добавить `display: flex` для требуемого расположения элементов, там где не хватает аккуратного расположения элементов в строку. Если для решения этой задачи не хватает группирующего элемента, то добавляйте `div`;
   - использовать необходимые свойства для контейнера и элементов для их выравнивания, расположения и управления размерами;
   - применяя принцип mobile-first сделать страницу отзывчивой к отображению на экранах разной ширины от 320px до 2560px;
   - добавить недостающие элементы в разметку html;
   - использовать для скрытия элементов на мобильной версии `display: none;`
   - использовать минимум 2 точки перехода (breakpoint) и обосновать их выбор;
   - добиться адекватного перестроения макета при уменьшении/увеличении ширины экрана, не должна появляться горизонтальная полоса прокрутки;

#### Полезные классы

```css
.wrapper {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
```

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

### Результаты выполнения лабораторной работы:

Статическая веб-страница на хостинге, со структурой, которая соответствует требованиям и сохранена в системе контроля версий.

Требования к html и css:

- Удобочитаемый код ([Руководство по оформлению HTML/CSS кода от Google](https://habr.com/ru/post/143452/));
- Корректное использование тегов.
- Отсутствие ошибок на [валидаторе](https://validator.w3.org/) для [html](https://validator.w3.org/) и [css](https://jigsaw.w3.org/css-validator/);

### Дополнительные источники

#### Flexbox

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

#### RWD

1. [Doka: media](https://doka.guide/css/media/)
1. [MDN: Отзывчивый дизайн](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Responsive_Design)
1. [Styling Layout Wrappers In CSS](https://ishadeed.com/article/styling-wrappers-css/)
1. Приложение для проверки отзывчивости - https://responsively.app/

### Вопросы для защиты

1. Что такое флекс-контейнер?
1. Что такое флекс-элемент?
1. Какие оси есть у флексов и какие свойства меняют их направления?
1. Как выстраиваются флекс-элементы в контейнере?
1. Какие свойства и как они выравнивают флекс-элементы?
1. В чем заключается принцип mobile-first?
1. Из чего состоит медиа-запрос?
1. Как работает max-width и min-width в медиа-запросе?
1. Какие есть подходы к выбору точек перехода?
