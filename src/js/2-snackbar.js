import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import { Input } from "postcss";



const delayInput = document.querySelector("input[type='number']")
const form = document.querySelector(".form");



form.addEventListener("submit" , (e) => {

    e.preventDefault();

    const delay = Number(delayInput.value)
    const state = document.querySelector("input[name='state']:checked")

    createPromise(delay, state)
        .then(()=> {
            fulfilledMessage(delay)
        })

        .catch(() => {
            rejectMessage(delay)
        }) 


    form.reset()
})


function createPromise(delay,state) {

    return  new Promise((resolve, reject) => {
        setTimeout(() => {

            const shouldResolve = isFulfilledState(state)

            if (shouldResolve) {
                resolve();
            } else {
                reject()
            }

        }, delay)
       
    })
}




function isFulfilledState(state) {

    if (state && state.value === 'fulfilled') {
        return true;
    }
    return false;
}



function fulfilledMessage(delay) {
    iziToast.show({
        color: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topCenter"
      })
}


function rejectMessage(delay) {
    iziToast.show({
        color: 'red',
        message: `❌ Rejected promise in ${delay} ms`,
        position: "topCenter"
      })
}


