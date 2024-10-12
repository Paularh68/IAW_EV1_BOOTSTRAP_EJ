$(document).ready(function() {
    const projects = [
        {
            id: 1,
            name: 'Proyecto Arduino I3',
            description: 'El objetivo del proyecto fue crear un producto que ayudara a personas con capacidades especiales en su vida diaria. Los alumnos de los institutos Cuatrovientos y Salesianos colaboraron en este proyecto intermodular e interdisciplinar, aplicando conocimientos de diversas asignaturas para complementar sus habilidades y contribuir al desarrollo exitoso del mismo.',
            image: './images/arduino.jpeg'
        },
        {
            id: 2,
            name: 'Cloud Infrastructure Management',
            description: 'Este proyecto se centró en la creación de una infraestructura en la nube completamente funcional usando servicios como AWS y Azure. Se implementaron servidores virtuales, sistemas de almacenamiento y balanceadores de carga para garantizar alta disponibilidad y escalabilidad.',
            image: 'https://via.placeholder.com/400x200?text=Cloud+Infrastructure'
        },
        {
            id: 3,
            name: 'Seguridad en Redes Corporativas',
            description: 'Implementación de políticas de seguridad avanzadas en una red corporativa, utilizando firewalls, VPNs y sistemas de detección de intrusos (IDS) para proteger la red de ataques internos y externos.',
            image: 'https://via.placeholder.com/400x200?text=Seguridad+en+Redes'
        },
        {
            id: 4,
            name: 'Automatización de Servicios IT',
            description: 'Desarrollo de un sistema automatizado para la gestión de servicios IT, como la creación automática de usuarios, la instalación remota de software y el mantenimiento periódico de servidores.',
            image: 'https://via.placeholder.com/400x200?text=Automatizacion+IT'
        },
        {
            id: 5,
            name: 'Monitoreo y Alertas en Sistemas',
            description: 'Creación de un sistema de monitoreo para servidores de producción utilizando Nagios y Zabbix. El proyecto incluyó la implementación de alertas en tiempo real.',
            image: 'https://via.placeholder.com/400x200?text=Monitoreo+de+Sistemas'
        },
        {
            id: 6,
            name: 'Virtualización de Servidores con Proxmox',
            description: 'Implementación de una infraestructura de servidores virtualizados utilizando Proxmox VE. Este proyecto incluyó la configuración de servidores virtuales para mejorar la eficiencia y reducir los costos operativos.',
            image: 'https://via.placeholder.com/400x200?text=Virtualizacion+de+Servidores'
        },
        {
            id: 7,
            name: 'Sistema de Respaldo y Recuperación',
            description: 'Desarrollo de un sistema de backup y recuperación ante desastres utilizando herramientas para garantizar la integridad y seguridad de los datos en una red empresarial.',
            image: 'https://via.placeholder.com/400x200?text=Respaldo+y+Recuperacion'
        },
        {
            id: 8,
            name: 'Administración de Active Directory',
            description: 'Proyecto enfocado en la implementación de Active Directory. Incluyó la gestión de políticas de grupo, creación y administración de usuarios, y la configuración de permisos de acceso.',
            image: 'https://via.placeholder.com/400x200?text=Administracion+AD'
        },
        {
            id: 9,
            name: 'Migración a Linux Empresarial',
            description: 'Planificación e implementación de la migración de una infraestructura basada en Windows a servidores Linux. El proyecto incluyó la configuración de servidores de correo, servidores web y sistemas de almacenamiento.',
            image: 'https://via.placeholder.com/400x200?text=Migracion+a+Linux'
        }
    ];

    // Función para mostrar los proyectos
    function displayProjects(filteredProjects) {
        $('#projectsContainer').empty(); // Limpiar el contenedor de proyectos
        filteredProjects.forEach(project => {
            $('#projectsContainer').append(`
                <div class="col-md-4">
                    <div class="card">
                        <img src="${project.image}" class="card-img-top" alt="${project.name}">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.description.substring(0, 100)}...</p>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" 
                            data-project-id="${project.id}">Más info</button>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Mostrar todos los proyectos al cargar la página
    displayProjects(projects);

    // Manejar el evento del formulario de búsqueda
    $('#searchForm').on('submit', function(e) {
        e.preventDefault(); // Prevenir el envío del formulario
        const searchTerm = $('#searchInput').val().toLowerCase(); // Obtener el término de búsqueda

        // Filtrar proyectos que coincidan con el término de búsqueda
        const filteredProjects = projects.filter(project => 
            project.name.toLowerCase().includes(searchTerm) || 
            project.description.toLowerCase().includes(searchTerm)
        );

        // Mostrar proyectos filtrados
        displayProjects(filteredProjects); 
    });

    // Manejar el evento del botón "Más info"
    $('#projectModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const projectId = button.data('project-id');
        const project = projects.find(p => p.id === projectId);
        const modal = $(this);
        modal.find('.modal-title').text(project.name);
        modal.find('#modalImage').attr('src', project.image);
        modal.find('#modalDescription').text(project.description);
    });

    // Manejar el envío del formulario de contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevenir el envío del formulario

        // Obtener los valores del formulario
        const email = $('#email').val();
        const message = $('#message').val();

        // Aquí podrías añadir la lógica para enviar el email, por ejemplo usando una API.
        // Sin embargo, en este contexto simplemente mostraremos un mensaje de éxito.
        alert(`Correo enviado a ramirezharop@gmail.com\nDe: ${email}\nMensaje: ${message}`);

        // Limpiar el formulario
        $(this).trigger('reset');
    });
});
