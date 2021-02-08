
const  id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {

    const response = await fetch('http://localhost:3000/posts/' + id);
    const post = await response.json();

    let template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `;

    container.innerHTML = template;
    
}


window.addEventListener('DOMContentLoaded', () => renderDetails());