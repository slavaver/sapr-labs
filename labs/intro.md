## Регистрации

1. [Github](//github.com)
1. [Figma](//figma.com)
1. [Netlify](//www.netlify.com/)

## Установка ПО

1. VS Code или любой другой
   Расширения:
   - Live Server
   - Prettier
   - indent-rainbow
1. Git

## Базовые команды

### Команды терминала

```
pwd
cd
ls
mkdir
```

### Команды git:

```
git init
git status
git add
git commit
git log
git push
```

## Проба пера

### HTML

1. Создать index.html
   1. header, nav, main, footer, h1, h2, p, a, img, ul или ol, li
1. Проверить на [валидаторе](https://validator.w3.org/)
1. Исправить ошибки
1. Отформатировать код
1. Сохранить изменения

### Git

1. В папке проекта инициализировать репозиторий `git init --initial-branch=main`
1. Задать имя и имейл:
   - `git config --local user.email "Ваш имейл на github"`
   - `git config --local user.name "Ваше имя"`
1. Добавить файлы для коммита `git add index.html`
1. Создать коммит с `git commit -m "текст вашего коммита"`
1. Связать локальный репозиторий с удаленным `git remote add origin ссылка_с_github`
1. Отправить изменения на удаленный репозиторий `git push origin main`

### Netlify

1. Создать новый сайт
1. Связать репозиторий и нужную ветку на github с netlify
1. Дождаться выгрузки страницы

## Результат работы

Страница на Netlify. Репозиторий с **несколькими** коммитами. index.html проходит валидацию, код в нем отформатирован.
