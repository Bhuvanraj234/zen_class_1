  // any key press event
        document.addEventListener('keypress', function (event) {
            if (event.key == 'Enter') {
                calculate();
                return;
            }
            // if key is not a number except (+,-,/,*) then show alert
            if (event.key != '+' && event.key != '-' && event.key != '/' && event.key != '*' && isNaN(event.key)) {
                alert("Only numbers are allowed");
                return;
            }
            addNumber(event.key);
        });
        function addNumber(number) {
            var result = document.getElementById('result');
            // if value is 0 and number is 0 then return
            if (result.value == 0 && number == 0) {
                return;
            }
            result.value += number;
        }
        function addOperator(operator) {
            var result = document.getElementById('result');
            result.value += operator;
        }
        function clearDisplay() {
            var result = document.getElementById('result');
            result.value = "";
        }
        function backspace() {
            var result = document.getElementById('result');
            result.value = result.value.slice(0, -1);
        }
        function calculate() {
            var resultEle = document.getElementById('result');
            var result = eval(resultEle.value)
            // if result is not a number then return
            if (isNaN(result)) {
                resultEle.value = 0;
                return
            }
            resultEle.value = result;
        }