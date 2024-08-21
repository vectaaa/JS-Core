//ASYNC: this is because it takes sometime before executing
const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Done!')
        }, 1500);
    });
    return promise;
   };


setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    })
}, 2000);

console.log('Hello');
console.log('Hi!'); 

 