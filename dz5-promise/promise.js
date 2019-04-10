function c(a) {
    console.log(a);
}

// let promise = new Promise((resolve, reject) => {
//     let randNum = Math.ceil(Math.random() * 100);
//
//     setTimeout(() => {
//         if(randNum > 50) {
//             let randNum2 = Math.ceil(Math.random() * 10);
//             resolve(randNum2);
//         } else {
//             reject(new Error('Упс, что то пошло не так'));
//         }
//     }, 2000)
// });
//
// promise
//     .then(result => `Успешно выполнен со значенем - ${result}`)
//     .then(resultstring => c(resultstring + ' Добавили еще строку'))
//     .catch(error => console.error(error))
//     .finally(() => c('Промис закончил работу'));
//
// c('Синхронное выполнение');




// getTodos('https://jsonplaceholder.typicode.com/todos');
//
// // function getTodos(url) {
// //     fetch(url)
// //         .then(res => res.json())
// //         .then(item => {
// //             return item.filter(obj => {
// //                 return obj.completed === true
// //             });
// //
// //         })
// //         .then(filterItem => c(filterItem))
// //         .catch(error => {
// //             alert (error)
// //         });
// // }




//
// function setTodo(url, todo) {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(todo),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//     };
//
//     fetch(url, options)
//         .then(res => res.json())
//         .then(item => { c(item) })
//         .catch(error => console.error(error) );
// }
//
// const todo = {
//     title: "quo adipisci enim quam ut ab",
//     userId: 8,
//     completed: false
// };
//
// setTodo('https://jsonplaceholder.typicode.com/todos', todo);


// async function getTodos(url) {
//
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         let filteredData = data.filter(obj => { return obj.completed === true });
//
//         return filteredData;
//
//     } catch (error) {
//         throw new Error('Не получил ответ от сервера')
//     }
//
//
// }
//
// (async () => {
//     try {
//         let todo = await getTodos('https://jsonplaceholder.typicode.com/todos');
//         c(todo);
//     } catch (error) {
//         console.error(error);
//     }
//
//
//
// })();


class Blog {

    async getPosts(url) {
        try {
            const response = await fetch(url);

            if (response.status === 200) {
                const posts = await response.json();
                const filteredPosts = posts.filter(item => this.filterTitle(item.title, 30));
                const sortPost = filteredPosts.sort((a, b) => (a.userId > b.userId) ? -1 : 1);

                return sortPost;
            }

        } catch (e) {
            throw new Error('Не удалось получить Посты')
        }
    }

    filterTitle(str, count) {
        return (str.replace(/\s/g, '').length <= count) ? true : false;
    }

    addPostToPage(posts) {

        let putElem = document.querySelector('button');
        posts.forEach((post) => {

            let elem = document.createElement('div');
            elem.classList = 'post';

            elem.innerHTML = `<h2 class="title">${post.title}</h2>
                                <p>${post.body}</p>
                                <ul>
                                    <li>
                                          usetId: ${post.userId}
                                    </li>
                                    <li>
                                        postId: ${post.id}
                                    </li></ul>`;
            elem.childNodes[0].addEventListener('click', (event) => {
                alert(event.target.textContent);
            });

            document.body.insertBefore(elem, putElem);

        });
    }
}


(async () => {
    let blog = new Blog();
    try {
        const posts = await blog.getPosts('https://jsonplaceholder.typicode.com/posts');
        blog.addPostToPage(posts);
    } catch(e) {
        console.log(e);
    }
})();


c('Синхронный код');
