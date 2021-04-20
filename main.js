const form = document.getElementById('todoForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const { target } = event;

    const elements = target.getElementsByTagName('input');

    if(document.getElementById("keyword").value == "Blusa"){
        const idInput = elements.id;
        const todoInput = elements.todo;
        const todoState = elements.state;
        
        if(todoInput && !idInput.value) { 
            const todo = save(todoInput.value);
            render(todo.id, todo.text, todo.state);
        } else {
            update(idInput.value, todoInput.value, todoState.checked);
            loadItems();
        }
        target.reset();
    }else if(document.getElementById("keyword").value == "Lego"){
        const idInput = elements.id;
        const todoInput = elements.todo;
        const todoState = elements.state;
        
        if(todoInput && !idInput.value) { 
            const todo = save(todoInput.value);
            render(todo.id, todo.text, todo.state);
        } else {
            update(idInput.value, todoInput.value, todoState.checked);
            loadItems();
        }
        target.reset();
    }else if(document.getElementById("keyword").value == "Carrinho de brinquedo"){
        const idInput = elements.id;
        const todoInput = elements.todo;
        const todoState = elements.state;
        
        if(todoInput && !idInput.value) { 
            const todo = save(todoInput.value);
            render(todo.id, todo.text, todo.state);
        } else {
            update(idInput.value, todoInput.value, todoState.checked);
            loadItems();
        }
        target.reset();
    }else if(document.getElementById("keyword").value == "Ovo de páscoa"){
        const idInput = elements.id;
        const todoInput = elements.todo;
        const todoState = elements.state;
        
        if(todoInput && !idInput.value) { 
            const todo = save(todoInput.value);
            render(todo.id, todo.text, todo.state);
        } else {
            update(idInput.value, todoInput.value, todoState.checked);
            loadItems();
        }
        target.reset();
    }else if(document.getElementById("keyword").value == "Lapis"){
        const idInput = elements.id;
        const todoInput = elements.todo;
        const todoState = elements.state;
        
        if(todoInput && !idInput.value) { 
            const todo = save(todoInput.value);
            render(todo.id, todo.text, todo.state);
        } else {
            update(idInput.value, todoInput.value, todoState.checked);
            loadItems();
        }
        target.reset();
    }

});

function getAllTodos() {
    let todos = [];
    const todosStr = localStorage.getItem('todo-list');
    if(todosStr) todos = JSON.parse(todosStr);
    return todos;
}

function getById(id) {
    const list = getAllTodos();
    const todo = list.find((item) => item.id == id);
    if(todo) return todo;
}

function save(text, state = false) {
    
    const todo = {
        id: 1,
        text, state
    };

    const list = getAllTodos();
    if(list.length) todo.id = list[list.length - 1].id + 1;

    list.push(todo);
    localStorage.setItem('todo-list', JSON.stringify(list));
    return todo;
}

function deleteItem(id) {
    let list = getAllTodos();
    list = list.filter(todo => todo.id != id);
    localStorage.setItem('todo-list', JSON.stringify(list));
}

function update(id, text, state) {
    const list = getAllTodos();
    const index = list.findIndex((todo) => todo.id == id);

    if(index != -1) {
        list[index] = {id, text, state};
    }

    localStorage.setItem('todo-list', JSON.stringify(list));
} 

function btnDeleteAction(event) {
    deleteItem(event.target.value);
    loadItems();
}

function todoChecked(event) {
    event.target.checked;
}

function render(id, text, state = false) {
    const list = document.getElementsByClassName('list-group').item(0);

    if(list) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.dataset.id = id;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = state;
        input.addEventListener('click', todoChecked)

        const buttonDel = document.createElement('button');
        buttonDel.name = 'id';
        buttonDel.innerText = "🗑";
        buttonDel.classList.add(...['btn', 'btn-sm', 'btn-secondary', 'float-right']);
        buttonDel.value = id;
        buttonDel.addEventListener('click', btnDeleteAction);

        var dinheiro;

        if(text == "Blusa"){
            dinheiro = ": R$ 10,00";
            li.appendChild(input);
            li.append(text + dinheiro); 
            li.appendChild(buttonDel);
    
            list.appendChild(li);
        }else if(text == "Lego"){
            dinheiro = ": R$ 11,00";
            li.appendChild(input);
            li.append(text + dinheiro); 
            li.appendChild(buttonDel);
    
            list.appendChild(li);
        }else if(text == "Carrinho de brinquedo"){
            dinheiro = ": R$ 12,00";
            li.appendChild(input);
            li.append(text + dinheiro); 
            li.appendChild(buttonDel);
    
            list.appendChild(li);
        }else if(text == "Ovo de páscoa"){
            dinheiro = ": R$ 13,00";
            li.appendChild(input);
            li.append(text + dinheiro); 
            li.appendChild(buttonDel);
    
            list.appendChild(li);
        }else if(text == "Lapis"){
            dinheiro = ": R$ 14,00";
            li.appendChild(input);
            li.append(text + dinheiro); 
            li.appendChild(buttonDel);
    
            list.appendChild(li);
        }
    }

    document.querySelectorAll("li")[0].style.display = 'block';
    document.querySelectorAll("li")[1].style.display = 'block';
    document.querySelectorAll("li")[2].style.display = 'block';
    document.querySelectorAll("li")[3].style.display = 'block';
    document.querySelectorAll("li")[4].style.display = 'block';
}

function loadItems() {
    const list = document.getElementsByClassName('list-group').item(0);
    list.innerHTML = '';
    getAllTodos().forEach((todo) => {
        render(todo.id, todo.text, todo.state);
    });
} 

window.onload = loadItems;

function filterByKeyword(filterKeyword) {

    var list = document.querySelector('#list').childNodes

    var newFilteredUl = document.createElement('ul')

    try {

      for (var i = 0, length = list.length; i < length; i++) { 

        if (list[i].nodeType != 1 && null != list[i].nextSibling) {

          if (list[i].nextSibling.innerText == filterKeyword) {

            var newLi = document
              .createElement('li')

            var newLiText = document
              .createTextNode(filterKeyword)

            newLi.appendChild(newLiText)
          }
        }
      }

    newFilteredUl.appendChild(newLi)
    } catch (e) { 
      console.error(e)
    }
    return newFilteredUl
  }

  var button = document.querySelector('#search')

  button.onclick = function(filterKeyword) {

    if(document.getElementById("keyword").value == "Blusa"){
        document.querySelectorAll("li")[0].style.display = 'block';
        document.querySelectorAll("li")[1].style.display = 'none';
        document.querySelectorAll("li")[2].style.display = 'none';
        document.querySelectorAll("li")[3].style.display = 'none';
        document.querySelectorAll("li")[4].style.display = 'none';
    }else if(document.getElementById("keyword").value == "Lego"){
        document.querySelectorAll("li")[1].style.display = 'block';
        document.querySelectorAll("li")[0].style.display = 'none';
        document.querySelectorAll("li")[2].style.display = 'none';
        document.querySelectorAll("li")[3].style.display = 'none';
        document.querySelectorAll("li")[4].style.display = 'none';
    }else if(document.getElementById("keyword").value == "Carrinho de brinquedo"){
        document.querySelectorAll("li")[2].style.display = 'block';
        document.querySelectorAll("li")[0].style.display = 'none';
        document.querySelectorAll("li")[1].style.display = 'none';
        document.querySelectorAll("li")[3].style.display = 'none';
        document.querySelectorAll("li")[4].style.display = 'none';
    }else if(document.getElementById("keyword").value == "Ovo de páscoa"){
        document.querySelectorAll("li")[3].style.display = 'block';
        document.querySelectorAll("li")[0].style.display = 'none';
        document.querySelectorAll("li")[1].style.display = 'none';
        document.querySelectorAll("li")[2].style.display = 'none';
        document.querySelectorAll("li")[4].style.display = 'none';
    }else if(document.getElementById("keyword").value == "Lapis"){
        document.querySelectorAll("li")[4].style.display = 'block';
        document.querySelectorAll("li")[0].style.display = 'none';
        document.querySelectorAll("li")[1].style.display = 'none';
        document.querySelectorAll("li")[2].style.display = 'none';
        document.querySelectorAll("li")[3].style.display = 'none';
    }else if(document.getElementById("keyword").value == ""){
        document.querySelectorAll("li")[0].style.display = 'block';
        document.querySelectorAll("li")[1].style.display = 'block';
        document.querySelectorAll("li")[2].style.display = 'block';
        document.querySelectorAll("li")[3].style.display = 'block';
        document.querySelectorAll("li")[4].style.display = 'block';
    }

}