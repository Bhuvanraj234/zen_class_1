 // when submit the form append the record to the table
 document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let fname = document.querySelector('#first-name').value;
    let lname = document.querySelector('#last-name').value;
    let address = document.querySelector('#address').value;
    let pincode = document.querySelector('#pincode').value;
    let gender_ele = document.getElementsByName('gender');
    let gender = ""
    for (i = 0; i < gender_ele.length; i++) {
        if (gender_ele[i].checked) {
            gender = gender_ele[i].value;
        }
    }
    let food_ele = document.getElementsByName('food');
    let food = ""
    let count = 0
    for (i = 0; i < food_ele.length; i++) {
        // validation the user must select atleast 2 foods
        if (food_ele[i].checked) {
            count += 1;
            food = food ? food_ele[i].value + ', ' + food : food_ele[i].value;
        }
    }
    if (count < 2) {
        alert("Please select at least 2 foods");
        return;
    }
    let state = document.querySelector('#state').value;
    let country = document.querySelector('#country').value;
    let table = document.querySelector('tbody');
    let row = document.createElement('tr');
    row.innerHTML = `<td>${fname}</td><td>${lname}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${food}</td><td>${state}</td><td>${country}</td>`;
    table.appendChild(row);
    // clear the form
    document.querySelector('form').reset();
})