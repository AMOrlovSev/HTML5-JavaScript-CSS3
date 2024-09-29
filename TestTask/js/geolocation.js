window.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    const locationButton = document.getElementById('locationBtn');
    locationButton.addEventListener('click', getLocation);

    function getLocation() {
        if (Modernizr.geolocation) {
            document.getElementById('geostatus').textContent = 'Определяем местоположение...';
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            document.getElementById('geostatus').textContent = 'Geolocation API не поддерживается вашим браузером.';
        }
    }

    function showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let accuracy = position.coords.accuracy;
        document.getElementById('geostatus').textContent = 'Местоположение получено:';
        document.getElementById('yourlocation').innerHTML = `
            Широта: ${latitude} <br>
            Долгота: ${longitude} <br>
            Точность: ${accuracy} метров
        `;
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                document.getElementById('geostatus').textContent = 'Пользователь отклонил запрос на определение местоположения.';
                break;
            case error.UNKNOWN_ERROR:
                document.getElementById('geostatus').textContent = 'Произошла неизвестная ошибка.';
                break;
        }
    }
});