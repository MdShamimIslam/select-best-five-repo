
function getValueElementById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    return inputValue;
}

function getTextElementById(elementId) {
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;
    const textValue = parseInt(textFieldString);
    return textValue;
}

function setTextElementById(elementId, newValue) {
    const setValue = document.getElementById(elementId);
    setValue.innerText = newValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerAmount = getValueElementById('per-player-field');
    if (isNaN(perPlayerAmount)) {
        alert('please enter the number');
        return;
    }
    const perPlayerTotalAmount = perPlayerAmount * 5;
    setTextElementById('player-expenses', perPlayerTotalAmount);
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerAmount = getValueElementById('manager-field');
    const coachAmount = getValueElementById('coach-field');

    const playerExpensesAmount = getTextElementById('player-expenses');
    if (isNaN(managerAmount && coachAmount)) {
        alert('Please enter the number');
        return;
    }
    const totalAmount = managerAmount + coachAmount + playerExpensesAmount;
    setTextElementById('total-balance', totalAmount);
})

function getTextContentById(elementId) {
    const textContentField = document.getElementById(elementId);
    const textContent = textContentField.innerText;
    return textContent;
}



const playerArray = [];

function display(allPlayers) {

    const ulElement = document.getElementById('ul-list');
    ulElement.innerHTML = '';
    for (let i = 0; i < playerArray.length; i++) {

        const nameOfPlayer = playerArray[i].name;
        const ul = document.createElement('ul');
        ul.innerHTML = ` <li>${nameOfPlayer} </li> `;
        ulElement.appendChild(ul);
    }

}


function addPlayers(element) {

    const playerName = element.parentNode.children[0].innerText;

    const playerObject = { name: playerName };
    playerArray.push(playerObject);

    if (playerArray.length > 5) {
        alert("Don't more verification because 5 is done");
        return;
    }

    element.disabled = true;

    document.getElementById('total-added-player').innerText = playerArray.length;

    display(playerArray);


}

