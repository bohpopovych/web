function renderValues(values) {
    const section = document.querySelector('section');

    const html = `
        <div>
            <img src="${values.picture.thumbnail}" alt="${values.first}" />
        </div>
        <div>
            <span>Email: </span>
            <strong>${values.email}</strong>
        </div>
        <div>
            <span>Ім'я: </span>
            <strong>${values.name.title} ${values.name.first}</strong>
        </div>
        <div>
            <span>Телефон: </span>
            <strong>${values.phone}</strong>
        </div>
        <div>
            <span>Miсто: </span>
            <strong>${values.location.city}</strong>
        </div>
    `

    section.insertAdjacentHTML('beforeend', html)
}

fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderValues(data.results[0]);
    });