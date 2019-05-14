class MainPage {

    getFolderName() {
        return document.querySelector('#foldername').value;
    }
    getFileName() {
        return document.querySelector('#filename').value;
    }
    getData() {
        return document.querySelector('#data').value;
    }
    getFilePath() {
        return document.querySelector('#fileToRead').value;
    }
    getWriteButton() {
        return document.querySelector('#submit-data');
    }

    getReadButton() {
        return document.querySelector('#readButton');
    }
    getPostsBlock() {
        return document.querySelector('#posts');
    }

    sendData(url, folder, file, data) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                params: {'folderName': folder, 'fileName': file},
                data: data
            }),
            headers: {'Content-Type': 'application/json', Accept: 'application/json',}
        };

        fetch(url, options)
            .then(res => res.json())
            .then(res => {console.log(res)})
            .catch(error => console.error(error) );

    }

    async readFile(url, filePath) {
        const options = {
            method: 'POST',
            body: JSON.stringify({"filePath": filePath}),
            headers: {'Content-Type': 'application/json', Accept: 'application/json',}
        };

        let posts = await fetch(url, options)
            .then(res => res.json())
            .then(res =>  res )

        return posts;
        }


}

const mainPage = new MainPage();

mainPage.getWriteButton().addEventListener('click', (e) => {
    e.preventDefault();
    const folder = mainPage.getFolderName();
    const file = mainPage.getFileName();
    const data = JSON.parse(mainPage.getData());
    mainPage.sendData('add', folder, file, data);
});

mainPage.getReadButton().addEventListener('click', (e) => {
    e.preventDefault();
    const filePath = mainPage.getFilePath();

    (async function(){
        let posts = await mainPage.readFile('read', filePath);

        const postRoot = mainPage.getPostsBlock();
        let div = document.createElement('ul');
        div.innerHTML = `<li>${posts.title}</li><li>${posts.userId}</li>`;
        postRoot.appendChild(div);
    })()


});





const data = {
    "title": "quo adipisci enim quam ut ab",
    "userId": 8,
    "completed": false
};
