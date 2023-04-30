console.log('Meme generator'); // for id purposes

const imageInput = document.getElementById('imageURL-input'); // image URL input field
const topTextInput = document.getElementById('top-text-input'); // top text input field
const bottomTextInput = document.getElementById('bottom-text-input'); // bottom text input field
const form = document.querySelector('form'); // Submit button


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const memeBox = document.createElement('div'); // the div that will display the final product
    // image input
    memeBox.setAttribute('id', 'final-meme');
    memeBox.innerHTML = `<img src='${imageInput.value}'>`;
    document.body.append(memeBox);
       
    // top text input
    const topTextDiv = document.createElement('div');
    const topText = document.createElement('p');
    topTextDiv.setAttribute('id', 'top-text');
    topText.innerText = topTextInput.value;
    topTextDiv.append(topText);
    memeBox.append(topTextDiv);

    //bottom text input
    const bottomTextDiv = document.createElement('div');
    const bottomText = document.createElement('p');
    bottomTextDiv.setAttribute('id', 'bottom-text');
    bottomText.innerText = bottomTextInput.value;
    bottomTextDiv.append(bottomText);
    memeBox.append(bottomTextDiv);

    // delete button
    const deleteButton = document.createElement('button'); 
    deleteButton.setAttribute('id', 'delete');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        // console.log('Delete');
        memeBox.remove();
        deleteButton.remove();
    });
    document.body.append(deleteButton);
    form.reset();
// console.log('You clicked submit');
});

