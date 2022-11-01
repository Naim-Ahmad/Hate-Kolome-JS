// synchronous blocking behavior
// function takeOrder() {
//   console.log('Customer Order Processing')

//   var currentTime = new Date().getTime()
//   while(currentTime + 5000 >= new Date().getTime()) {
//   }
//   console.log('Customer Ordered Processed')
// }

// console.log('Customer Ordered')

// takeOrder()

// console.log('Customer Order Completed')

// asynchronous behavior > webAPI > stack queue
// function takeOrder() {
//   console.log('Customer Order Processing')

//   setTimeout(()=>{console.log('execution completed')},3000)
//   console.log('Customer Ordered Processed')
// }

// console.log('Customer Ordered')

// takeOrder()

// console.log('Customer Order Completed')

// handle asynchronous task by call back (but used for this seduction promise)
// function Ordered(Customer, callBack) {
//   console.log(`Customer Ordered for ${Customer}`)
//   callBack(Customer)
// }
// function processingOrder(Customer, callback) {
//   console.log('Customer Order Processing for ' + Customer)

//   setTimeout(() => {
//     console.log('Cooking completed for' + Customer )
//     console.log('Customer Ordered Processed for ' + Customer)
//     callback(Customer)
//   }, 3000)
// }

// function orderCompleted(Customer) {
//   console.log('Customer Order Completed for ' + Customer)
// }

// Ordered('Naim', (Customer) => {
//   processingOrder(Customer, () => {
//     orderCompleted(Customer)
//   })
// })

// handle asynchronous task by Promise

// promise
//   .then(promise2)
// .then(res => {
//   console.log(res)
// })
//   .catch(e => {
//   console.dir(e.message)
// })

function p() {
    const hasMeeting = false;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!hasMeeting) {
                const Meeting = {
                    name: 'Technical Meeting',
                    location: 'Google meet',
                    time: '10:00 pm',
                };
                resolve(Meeting);
            } else {
                reject(new Error('Meeting Time is Scheduled'));
            }
        }, 2000);
    });
    function promise2(Meeting) {
        return new Promise((resolve, reject) => {
            resolve(`${Meeting.name} in ${Meeting.location} on ${Meeting.time}`);
        });
    }

    async function myFunc() {
        const meeting = await promise;
        const meetingDetails = await promise2(meeting);
        console.log(meetingDetails);
    }
    myFunc();
}

p();
