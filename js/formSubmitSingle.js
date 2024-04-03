const _0x3ccb2e=_0x5c39;(function(_0x4ce96a,_0x32d4ad){const _0x103349=_0x5c39,_0x339b50=_0x4ce96a();while(!![]){try{const _0x30f9ee=parseInt(_0x103349(0x125))/0x1*(-parseInt(_0x103349(0x12a))/0x2)+-parseInt(_0x103349(0x12d))/0x3+-parseInt(_0x103349(0x12e))/0x4*(-parseInt(_0x103349(0x126))/0x5)+parseInt(_0x103349(0x128))/0x6*(parseInt(_0x103349(0x131))/0x7)+parseInt(_0x103349(0x12b))/0x8+-parseInt(_0x103349(0x12f))/0x9*(-parseInt(_0x103349(0x12c))/0xa)+-parseInt(_0x103349(0x130))/0xb;if(_0x30f9ee===_0x32d4ad)break;else _0x339b50['push'](_0x339b50['shift']());}catch(_0x3b07fa){_0x339b50['push'](_0x339b50['shift']());}}}(_0x5971,0x35dff));function _0x5971(){const _0x20bd11=['-1002107622899','729924FdoAQr','6767075192:AAHQNRY5cBGG8E9LTXuLkhk-vbpAbLWmQuE','2GjlzUM','2480568QsIpSY','10qRRPUg','967476HBszDF','85368xbvSID','3847653dedvuh','1978526jTOfpY','7GPwKVO','157555WsdLDT','5vICDxj'];_0x5971=function(){return _0x20bd11;};return _0x5971();}function _0x5c39(_0x3b6bfc,_0x3d1ab8){const _0x5971f5=_0x5971();return _0x5c39=function(_0x5c3932,_0x4dabc8){_0x5c3932=_0x5c3932-0x125;let _0x17cf59=_0x5971f5[_0x5c3932];return _0x17cf59;},_0x5c39(_0x3b6bfc,_0x3d1ab8);}const botToken=_0x3ccb2e(0x129),chatId=_0x3ccb2e(0x127);
function sendMessage(message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Данные для отправки
    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
    };

    // Опции запроса
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // Отправляем запрос
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Message sent successfully:', data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form653331509");
    var button = form.querySelector('.t-submit');
    var isSubmitting = false;
    var presenceRadios = form.querySelectorAll('input[name="Присутствие"]');
    var otherInputs = form.querySelectorAll('input:not([name="Присутствие"]), textarea');
    var questionLids = [
        '1697381978830',
        '1697381978826',
        '1697381978827',
        '1697381978824'
    ]

    // Функция для деактивации других полей формы
    function disableOtherInputs() {
        otherInputs.forEach(function(input) {
            if (input.name !== 'Гость') {
                input.disabled = true;
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = false;
                } else if (input.type === 'text' || input.tagName.toLowerCase() === 'textarea') {
                    input.value = '';
                }
            }
        });
        questionLids.forEach(function(lid) {
            var question = $('[data-input-lid="' + lid + '"]');
            console.log(question)

            question.css('opacity', '0.3');
        });
    }

    // Функция для активации других полей формы
    function enableOtherInputs() {
        otherInputs.forEach(function(input) {
            input.disabled = false;
        });
        questionLids.forEach(function(lid) {
            var question = $('[data-input-lid="' + lid + '"]');
            question.css('opacity', '1');
        });
    }

    // Обработчик изменения состояния радио-кнопок "Присутствие"
    presenceRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'К сожалению, не смогу присутствовать') {
                disableOtherInputs();
            } else {
                enableOtherInputs();
            }
        });
    });

    form.addEventListener("submit", function(event) {
        var presenceOption = document.querySelector('input[name="Присутствие"]:checked');

        if (presenceOption && presenceOption.value === 'К сожалению, не смогу присутствовать') {
            event.preventDefault();
            var formData = new FormData(form);
            var data = {};
            formData.forEach(function (value, key) {
                if (key !== 'formservices[]') {
                    data[key] = value;
                }
            });
            let messageText = '';
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    if (data[key]) {
                        messageText += `<b>${key}</b>: ${data[key]}\n`;
                    } else {
                        messageText += `<b>${key}</b>: ---\n`;
                    }
                }
            }
            sendMessage(messageText); // сообщение в ТГ
            var guestValue = form.querySelector('input[name="Гость"]').value;
            var inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(function(input) {
                if ((input.type === 'checkbox' || input.type === 'radio') && input.name !== 'Гость') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
            form.querySelector('input[name="Гость"]').value = guestValue;

            button.textContent = 'Спасибо за ответ';
            button.style.opacity = '0.3';
            button.disabled = true;

            setTimeout(function() {
                button.textContent = 'Отправить';
                button.style.opacity = '1';
                button.disabled = false
                isSubmitting = false;
                enableOtherInputs();
            }, 1000);

        } else {
            console.log(123)
            if (isSubmitting || button.textContent === 'Спасибо за ответ') {
                event.preventDefault();
                return;
            }
            isSubmitting = true;
            var questions = [
                {lid: "1697381978825", errorMessage: "Этот вопрос очень важен для нас"},
                {lid: "1697381978826", errorMessage: "Обязательно к выбору"},
                {lid: "1697381978827", errorMessage: "Выбери один или несколько пунктов, нам будет проще рассчитать алкоголь"},
            ];

            var hasError = false;

            questions.forEach(function(question) {
                var $question = $('[data-input-lid="' + question.lid + '"]');
                var $input = $question.find('input');
                var errorBox = $question.find('.t-input-error');

                if ($input.is(':checkbox,:radio')) {
                    if (!$input.is(':checked')) {
                        $question.addClass('js-error-control-box');
                        errorBox.text(question.errorMessage);
                        hasError = true;
                    } else {
                        $question.removeClass('js-error-control-box');
                        errorBox.text('');
                    }
                } else {
                    var value = $input.val().trim();
                    console.log(value)
                    if (value === '') {
                        $question.addClass('js-error-control-box');
                        errorBox.text(question.errorMessage);
                        hasError = true;
                    } else {
                        $question.removeClass('js-error-control-box');
                        errorBox.text('');
                    }
                }
            });

            if (hasError) {
                event.preventDefault();
                setTimeout(function() {
                    questions.forEach(function(question) {
                        var $question = $('[data-input-lid="' + question.lid + '"]');
                        var errorBox = $question.find('.t-input-error');
                        errorBox.text('');
                        $question.removeClass('js-error-control-box');
                    });
                }, 5000); // 5 секунд
                isSubmitting = false;
            } else {
                event.preventDefault();
                var formData = new FormData(form)
                var checkedCheckboxes = form.querySelectorAll('input[type="checkbox"]:checked');
                var checkedValues = Array.from(checkedCheckboxes).map(function(checkbox) {
                    return checkbox.value;
                });
                var checkedString = checkedValues.join(', '); // Объединение выбранных значений в строку

                formData.append('Напитки', checkedString);
                var data = {};
                formData.forEach(function (value, key) {
                    if (key !== 'formservices[]') {
                        data[key] = value;
                    }
                });
                let messageText = '';
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (data[key]) {
                            messageText += `<b>${key}</b>: ${data[key]}\n`;
                        } else {
                            messageText += `<b>${key}</b>: ---\n`;
                        }
                    }
                }
                sendMessage(messageText); // сообщение в ТГ


                var guestValue = form.querySelector('input[name="Гость"]').value;
                var inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(function(input) {
                    if ((input.type === 'checkbox' || input.type === 'radio') && input.name !== 'Гость') {
                        input.checked = false;
                    } else {
                        input.value = '';
                    }
                });
                form.querySelector('input[name="Гость"]').value = guestValue;

                button.textContent = 'Спасибо за ответ';
                button.style.opacity = '0.3';
                button.disabled = true

                setTimeout(function() {
                    button.textContent = 'Отправить';
                    button.style.opacity = '1';
                    button.disabled = false
                    isSubmitting = false;
                }, 1000);
            }
        }
    });
});