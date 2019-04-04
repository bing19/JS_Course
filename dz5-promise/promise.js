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


async function getTodos(url) {

    try {
        let response = await fetch(url);
        let data = await response.json();
        let filteredData = data.filter(obj => { return obj.completed === true });

        return filteredData;

    } catch (error) {
        throw new Error('Не получил ответ от сервера')
    }


}

(async () => {
    try {
        let todo = await getTodos('https://jsonplaceholder.typicode.com/todos');
        c(todo);
    } catch (error) {
        console.error(error);
    }



})();

c('Синхронный код');
