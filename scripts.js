function showModule(moduleId) {
    // Ocultar todos los módulos
    document.getElementById('registroEmpleado').style.display = 'none';
    document.getElementById('empleadosRegistrados').style.display = 'none';
    
    // Mostrar el módulo seleccionado
    document.getElementById(moduleId).style.display = 'block';
}

// Función para cargar empleados desde localStorage
function cargarEmpleados() {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

    empleados.forEach(empleado => {
        agregarEmpleadoTabla(empleado);
    });
}

// Función para agregar un empleado a la tabla y al localStorage
function agregarEmpleadoTabla(empleado) {
    const tabla = document.getElementById('empleadosTabla');
    const fila = tabla.insertRow();
    const celdaNombre = fila.insertCell(0);
    const celdaCedula = fila.insertCell(1);
    const celdaCargo = fila.insertCell(2);
    const celdaHoraLlegada = fila.insertCell(3);

    celdaNombre.textContent = empleado.nombre;
    celdaCedula.textContent = empleado.cedula;
    celdaCargo.textContent = empleado.cargo;
    celdaHoraLlegada.textContent = empleado.horaLlegada;
}

// Manejo del formulario de registro de empleados
document.getElementById('formRegistroEmpleado').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombreEmpleado').value;
    const cedula = document.getElementById('cedulaEmpleado').value;
    const cargo = document.getElementById('cargoEmpleado').value;
    const horaLlegada = document.getElementById('horaLlegada').value;

    // Crear objeto empleado
    const empleado = { nombre, cedula, cargo, horaLlegada };

    // Guardar empleado en localStorage
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    empleados.push(empleado);
    localStorage.setItem('empleados', JSON.stringify(empleados));

    // Agregar empleado a la tabla
    agregarEmpleadoTabla(empleado);

    // Limpiar el formulario
    document.getElementById('formRegistroEmpleado').reset();

    // Mostrar el módulo de empleados registrados
    showModule('empleadosRegistrados');
});

// Cargar empleados al iniciar la página
document.addEventListener('DOMContentLoaded', cargarEmpleados);
