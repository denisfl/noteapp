> Знакомьтесь! Алиса, это пудинг! Пудинг, это Алиса!

> *«Алиса в Зазеркалье» Льюис Кэрролл.*

Thane - шаблон для [Middleman](http://middlemanapp.com), основанный на [HTML5 Boilerplate](http://html5boilerplate.com). Еще здесь есть чуточку стилей [Bootstrap](htp://getbootstrap.com).

Основная идея Thane заключается в создании легкого простого инструмента, который позволит быстро приступить к разработке. 

В проекте используется структура файлов, аналогичная rails-приложениям:

    assets/stylesheets 
    assets/javascripts 
    assets/images

Если вы верстаете или прототипируете с помощью Middleman, а потом планируете перенести проект на Ruby on Rails, вам достаточно будет всего лишь скопировать папку assets.

*Конечно не стоит забывать, что для избежания проблем при переносе, в css пути к изображениям лучше всего использовать с помощью image-path(''): 
`background: image-path('image_name.jpg')`.*

###Как начать использовать:

  - для начала установите [middlemanapp.com](http://middlemanapp.com)
  - откройте терминал
  - и выполните: `git clone https://github.com/denisfl/thane.git projet_name` 
  - `cd projet_name`
  - установите гемы: `bundle install`
  - запустите middleman: `middleman server`
  - начинайте кодить :)

###Немного настроек

В файле *data/site.yml* вы можете задать язык, заголовок, описание и ключевые слова. В поле `google_analytics_id` можно указать ID Google Analytics, тогда в *layout.slim* подставится соответствующий код.

В файле *data/sitemap.yml* вы можете указать список всех страниц. Обычно это бывает удобно при прототипировании и верстке, чтобы показать весь список страниц. 
