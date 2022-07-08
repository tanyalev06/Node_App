const fs = require('fs');
const path = require('path');

//File System

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if(err) throw new Error(err)

//     console.log('Папка была создана')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'), //путь
//     'Hello world', //контент
//     (err) => { // ошибка
//         if(err) throw err
//         console.log('Файл был создан') //сообщение в консоль

        
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//             (err) => { // ошибка
//             if(err) throw err
//             console.log('Файл был изменен') //сообщение в консоль

//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                     if(err) throw err
//                     console.log(data);
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if(err) throw err 
        console.log('Файл переименован')
    }
)