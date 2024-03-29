document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { name: 'Hacer la compra', completed: false },
        { name: 'Limpiar la casa', completed: true },
        { name: 'Preparar la cena', completed: true },
        { name: 'Hacer ejercicio', completed: false },
        { name: 'Estudiar para el examen', completed: true },
        { name: 'Llamar a mamá', completed: false },
        { name: 'Reunión de trabajo', completed: false },
        { name: 'Pasear al perro', completed: true },
        { name: 'Ir al banco', completed: false },
        { name: 'Enviar correo electrónico', completed: false }
    ];

    const taskList = document.getElementById('tasks');
    const completedTasksCount = document.getElementById('completed-tasks');
    const pendingTasksCount = document.getElementById('pending-tasks');

    let completedCount = 0;

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
            completedCount++;
        }
        taskList.appendChild(li);
    });

    completedTasksCount.textContent = completedCount;
    pendingTasksCount.textContent = tasks.length - completedCount;
});
