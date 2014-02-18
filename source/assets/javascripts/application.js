//= require jquery

var App;

$(function () {
    'use strict';
    App = {
        init: function () {
        	this.cacheElements();
          this.onload();
          this.addNewNote();
          this.saveNote();
          this.removeNote();  
          this.getNoteItem();        
          this.ofCanvas();
        },
        cacheElements: function () {
          this.$noteTextarea = $('#note__textarea');
          this.$notesList = $('.js__notes-list');
        },
        onload: function() {          
          // TODO: Сделать проверку на поддерживаемость localStorage
          App.clearEmptyNote();
          App.getNotesList();
          App.createNote();
        },
        // Клик на кнопку "Новая заметка" вызавает функцию createNote
        addNewNote: function() {
          $('.js__add-new-note').on('click', function() {
            App.createNote();
            // При создании новой заметки надо обновлять список записей в сайдбаре
            // но пока происходит просто добавление списка, а не обновление
            // App.getNotesList();
          });
        },
        // Создание новой заметки
        createNote: function(){
          var noteName = 'note__' + Math.floor(new Date());

          App.$noteTextarea
            .attr('data-note', noteName)
            .val('');
          localStorage.setItem(noteName, '');
        },
        // Сохрнение заметки
        saveNote: function() {          
          setInterval(function() {                
            var noteID = App.$noteTextarea.attr('data-note');

            if (App.$noteTextarea.val() != '') {  
              document.title = App.$noteTextarea.val().split('\n')[0];            
              localStorage.setItem(noteID, App.$noteTextarea.val());
            } 

          }, 1000);          
        },
        // Удаление заметки по клику на кнопку "Удалить"
        removeNote: function() {
          $('.js__remove-note').on('click', function() {
            var link = $(this).parent(),
                noteID = link.attr('id');

            localStorage.removeItem(noteID);
            link.remove();
            App.createNote();
          });
        },
        // TODO: тут небольшой баг: очистка происходит не сразу всех пустых, а постепенно, при каждом обновлении
        clearEmptyNote: function() {
          for ( var i=0; i <= localStorage.length; i++ ) {
            var noteKey = localStorage.key(i);

            if ( localStorage.getItem(noteKey) === '' ) {
              localStorage.removeItem(noteKey);
            } 

          }
        },
        // Формирование списка заметок в сайдбаре
        getNotesList: function() {
          // Проверяем есть ли хотя бы одна заметка
          if ( localStorage.length > 0 ) {
             for ( var i=0; i <= localStorage.length; i++ ) {
              var noteKey = localStorage.key(i);
              // Выводим только непустые заметки
              if ( (noteKey != null) && localStorage.getItem(noteKey) != '' ) {
                App.$notesList.append('<li><a class="nav__link" href="#" id="' + noteKey + '">'  + localStorage.getItem(noteKey).split('\n')[0] + '<button class="remove-note js__remove-note">&times;</button></a></li>');                
              }              
            }
          }
        },
        // Отображение заметки в textarea по клику на соответствующей ссылке в сайдбаре
        getNoteItem: function() {
          var navLink = App.$notesList.children('li').find('.nav__link'),
              activeClass = 'nav__item--active';

          navLink.each(function() {
            $(this).on('click', function(e) {
              var noteId = $(this).attr('id');
              e.preventDefault();


              navLink.parent().removeClass(activeClass);
              $(this).parent().addClass(activeClass);
              App.$noteTextarea
                .attr('data-note', noteId)
                .val( localStorage.getItem(noteId) );
            });
          });
        },


        ofCanvas: function() {
          var ofCanvasBtn = $('.js__of-canvas-toggle'),
              ofCanvasExitBtn = $('.js__exit-off-canvas'),
              parentBlock = '.page__layout',
              toggleClass = 'js__sidebar-active';

          ofCanvasBtn.on('click', function(e) {
            e.preventDefault();
            $(this).closest(parentBlock).toggleClass(toggleClass);
          });

          ofCanvasExitBtn.on('click', function(e) {
            e.preventDefault();
            $(this).closest(parentBlock).removeClass(toggleClass);
          });
        }

    };
    App.init();
});
