new Promise((r) => {
    console.log(1)
    r()
}).then(()=> {
    console.log(2)
    new Promise((z) => {
        console.log(3)
        z()
    }).then(() => {
        console.log(4)
    }).then(() => {
        console.log(5)
    }).then(() => {
        console.log(6)
    })
}).then(() => {
    console.log(7)
}).finally(() => {
    console.log(8)
}).finally(() => {
    console.log(9)
})

Promise.resolve().then(() => {
    console.log(1);
    return Promise.resolve(2);
  }).then((res) => {
    console.log(res);
  }).then(() => {
    console.log(3);
  });
  
Promise.resolve().then(() => {
    console.log(10);
}).then(() => {
    console.log(20);
}).then(() => {
    console.log(30);
}).then(() => {
    console.log(40);
});

