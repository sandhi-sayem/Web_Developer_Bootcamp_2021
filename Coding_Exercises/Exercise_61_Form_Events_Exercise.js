const form = document.querySelector('form');
const listContainer = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const qtyInput = form.elements.qty;
    const productInput = form.elements.product;
    createNewLi(qtyInput.value, productInput.value);
    qtyInput.value = '';
    productInput.value = '';
});

function createNewLi(qty, product) {
    const newLi = document.createElement('li');
    newLi.innerText = `${qty} ${product}`;
    listContainer.appendChild(newLi);
}