document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'es',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },
      events: '/api/talleres',
      eventClick: function (info) {
        const taller = info.event.extendedProps;
  
        document.getElementById('modalTallerLabel').textContent = info.event.title;
        document.getElementById('modalDescripcion').textContent = taller.descripcion || 'Sin descripción';
        document.getElementById('modalFechaHora').textContent = info.event.start.toLocaleString();
        document.getElementById('modalTallerista').textContent = taller.tallerista || 'No disponible';
        document.getElementById('modalPeriodo').textContent = taller.periodo || 'No disponible';
  
        const modal = new bootstrap.Modal(document.getElementById('modalTaller'));
        modal.show();
      }
    });
  
    calendar.render();
  });
  