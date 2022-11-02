## Базовые команды консоли

pwd, ls, ls -la, cd, cp, mv, rm, mkdir

## Скачать и установить Git для вашей ОС

https://git-scm.com/downloads

## git config

Установка имя пользователя

`git config --local user.name "Your name"`

Проверка имени пользователя

`git config --local user.name`

Установка email

`git config --local user.email "email@example.com"`

Проверка email

`git config --local user.email`

## Создание репозитория локально

`cd <path>`

Создание нового локального репозитория с заданным именем

`git init [название проекта]`

Скачивание репозитория вместе со всей его историей изменений

`git clone [url-адрес]`

## git status

Перечисляет все новые или изменённые файлы, которые нуждаются в фиксации

`git status`

## git add

Индексация указанного файла для последующего коммита

`git add [файл]`

Добавить все текущие изменения в следующий коммит

`git add . (устаревший способ)`

`git add -A`

## git commit -m

Фиксация проиндексированных изменений и сохранение их в историю версий

`git commit -m "[сообщение с описанием]"`

Как писать сообщения коммитов http://frontiermag.ru/commit-message.html

## git push

Добавление нового удаленного репозитория

`git remote add origin https://github.com/<username>/<reponame>.git`

Загрузка всех изменений локальной ветки в удалённый репозиторий

`git push -u origin master`

## git pull

Загрузка истории из удаленного репозитория и объединение её с локальной.

`git pull`

git pull = git fetch + git merge

Скачивание всей истории из удалённого репозитория

`git fetch [удалённый репозиторий]`

Внесение изменений из ветки удалённого репозитория в текущую ветку локального репозитория

`git merge [удалённый репозиторий]/[ветка]`

## git log

История коммитов для текущей ветки

`git log`

## Help!

Открытие руководства об определенной команде

`git help <команда>`

`git <команда> --help`

`man git <команда>`

## Руководства по Git

- https://githowto.com/ru
- https://git-scm.com/book/ru/v2
- https://habr.com/ru/post/337196/
- https://guides.github.com/introduction/git-handbook/
- http://freesource.info/wiki/RuslanHihin/gitusermanual?v=b7s

## Онлайн обучение

- http://git-school.github.io/visualizing-git/#free
- https://stepik.org/course/3145/promo
- https://learngitbranching.js.org/

## Документация Git

- https://git-scm.com/docs

## Шпаргалки по командам Git

- https://github.github.com/training-kit/downloads/ru/github-git-cheat-sheet/
- https://img4.wsimg.com/support/images/hosting/12141/gitcheatsheet.pdf
- https://medium.com/@ABatickaya/%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-git-55eeea487676
