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
    form.reset()
})





function createPromise(delay,state) {


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            const shouldResolve = beOrNotToBe(state)

            if (shouldResolve) {
                resolve(    
                    iziToast.show({
                    color: 'green',
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    position: "topCenter"
                  })
                );

            } else {
                reject(
                    iziToast.show({
                        color: 'red',
                        message: `❌ Rejected promise in ${delay} ms`,
                        position: "topCenter"
                      })
                );  
            }

        }, delay)
    })
}




function beOrNotToBe(state) {

    if (state && state.value === 'fulfilled') {
        return true;
    }
    return false;
}