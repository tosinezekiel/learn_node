const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
// 	if(err) throw err
// 	console.log('folder created');
// });


// //create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world!', err => {
// 	if(err) throw err
// 	console.log('file created');
// });

//create file, write and append and file
const userDir = __dirname+'/test';

// fs.writeFile(path.join(userDir,'hello.txt'),'hello user,', err => {
// 	if(err) throw err
// 	console.log('file created');
// 	fs.appendFile(path.join(userDir,'hello.txt'), ' We are glad to have you here!', err => {
// 		if(err) throw err
// 		// console.log
// 		fs.readFile(path.join(userDir,'hello.txt'),'utf8', (err,data) => {
// 		if(err) throw err
// 		console.log(data);
// });
// 	})
// });

//read file
// fs.readFile(path.join(userDir,'hello.txt'),'utf8', (err,data) => {
// 	if(err) throw err
// 	console.log(data);
// });

fs.rename(path.join(userDir,'hello.txt'), path.join(userDir,'helloworld.txt'), err => {
	if(err) throw err
		console.log('file renamed...');
})