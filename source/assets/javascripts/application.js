var App = (function () {
  // 'use strict';
  document.addEventListener('DOMContentLoaded', function(event) {  

    var  noteTextarea = document.getElementById('note__textarea'),
         notesList = document.querySelector('.js__notes-list');

    // App = {
        return {
          onload();
          addNewNote();
          saveNote();
          removeNote();  
          getNoteItem();        
          ofCanvas();
        };
        // cacheElements: function () {
        //   noteTextarea = document.getElementById('note__textarea');
        //   notesList = document.querySelector('.js__notes-list');
        // },
        function onload() {          
          // TODO: Сделать проверку на поддерживаемость localStorage
          this.clearEmptyNote();
          this.getNotesList();
          this.createNote();
        };
        // Клик на кнопку "Новая заметка" вызавает функцию createNote
        function addNewNote() {
          document.querySelector('.js__add-new-note').addEventListener('click', function(event) {
            createNote();
            // При создании новой заметки надо обновлять список записей в сайдбаре
            // но пока происходит просто добавление списка, а не обновление
            // getNotesList();
          }, false);
        };
        // Создание новой заметки
        function createNote(){
          var noteName = 'note__' + Math.floor(new Date());

          noteTextarea.setAttribute('data-note', noteName);
          noteTextarea.value = '';
          localStorage.setItem(noteName, '');
        };
        // Сохрнение заметки
        function saveNote() {          
          setInterval(function() {                
            var noteID = noteTextarea.getAttribute('data-note');

            if (noteTextarea.value != '') {  
              document.title = noteTextarea.value.split('\n')[0];            
              localStorage.setItem(noteID, noteTextarea.value);
            } else {
              document.title = "*";            
            }

          }, 500);          
        };
        // Удаление заметки по клику на кнопку "Удалить"
        function removeNote() {
          var elArr = document.querySelectorAll('.js__remove-note');
          for (var i = elArr.length - 1; i >= 0; i--) {
            elArr[i].addEventListener('click', function(event) {           
              var link = event.target.parentElement,
                  noteID = link.getAttribute('id');

              localStorage.removeItem(noteID);
              link.remove();
              createNote();
            }, false);    
              
          };
        };
        // TODO: тут небольшой баг: очистка происходит не сразу всех пустых, а постепенно - при каждом обновлении
        function clearEmptyNote() {
          for ( var i=0; i <= localStorage.length; i++ ) {
            var noteKey = localStorage.key(i);

            if ( localStorage.getItem(noteKey) === '' ) {
              localStorage.removeItem(noteKey);
            } 

          }
        };
        // Формирование списка заметок в сайдбаре
        function getNotesList() {
          // Проверяем есть ли хотя бы одна заметка
          if ( localStorage.length > 0 ) {
             // for ( var i=0; i <= localStorage.length; i++ ) {
             for ( var i=localStorage.length - 1; i >= 0; i-- ) {
              var noteKey = localStorage.key(i);
              // Выводим только непустые заметки
              if ( (noteKey != null) && localStorage.getItem(noteKey) != '' ) {
                var notesItem = '<li><a class="nav__link" href="#" id="' + noteKey + '">'  + localStorage.getItem(noteKey).split('\n')[0] + '<button class="remove-note js__remove-note">&times;</button></a></li>';
                notesList.insertAdjacentHTML("beforeEnd", notesItem);
              }              
            }
          }
        };
        // Отображение заметки в textarea по клику на соответствующей ссылке в сайдбаре
        function getNoteItem() {
          var navLinkArr = document.querySelectorAll('.nav__link'),
              activeClass = 'nav__item--active';

          for (var i = navLinkArr.length - 1; i >= 0; i--) {
            navLinkArr[i].addEventListener('click', function(event) {
              var noteId = event.target.getAttribute('id');

              event.preventDefault();

              // navLinkArr[i].parentElement.className = '';
              // event.target.parentElement.className = activeClass;

              noteTextarea.setAttribute('data-note', noteId);
              noteTextarea.value = localStorage.getItem(noteId);
            }, false);
          };
        };
        function ofCanvas() {
          var ofCanvasBtn = document.querySelector('.js__of-canvas-toggle'),
              ofCanvasExitBtn = document.querySelector('.js__exit-off-canvas'),
              parentBlock = document.querySelector('.page__layout'),
              toggleClass = 'js__sidebar-active';

          ofCanvasBtn.addEventListener('click', function(event) {
            event.preventDefault();
            
            if ( parentBlock.hasAttribute('class') ) {
              parentBlock.setAttribute('class', toggleClass);
            } 

          }, false);

          ofCanvasExitBtn.addEventListener('click', function(event) {
            event.preventDefault();
            parentBlock.setAttribute('class', '');
          }, false);

        };

  }, false);
})();

