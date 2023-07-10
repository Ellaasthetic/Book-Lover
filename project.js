
function bookTrain() {
    let name = prompt("Hey book lover, glad you could join the train! What is your name?📔");

    if (name.length) {
       alert('Thanks, ' + name + ' , we will be in touch with you soon, merry christmas in advance!🎄')
    } else {
      alert('No name, we hope to have you on the train soon!')
    }
}

let bookTrainButton = document.querySelector("button");
bookTrainButton.addEventListener("click", bookTrain);