const but_skill = document.querySelector('.add_skill'),
    input_skill = document.querySelector('#add_skill');
but_skill.addEventListener('click', () => {
    if (input_skill.value) {
        var list = document.querySelector('.skill_list');
        // Создаём новый элемент
        var new_skill = document.createElement('li');
        new_skill.textContent = input_skill.value;
        // После вызова этого метода новый элемент отрисуется на странице
        list.appendChild(new_skill);
        input_skill.value = "";
    }
});
