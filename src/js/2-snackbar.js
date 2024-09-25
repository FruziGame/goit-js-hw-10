import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import { Input } from "postcss";



const button = document.querySelector("button[type='submit']")
const delayInput = document.querySelector("input[type='number']")

let state
let delay

button.addEventListener("click" , (e) => {

    e.preventDefault();
    delay = Number(delayInput.value)

    state = document.querySelector("input[name='state']:checked")

    


    createPromise(delay)
})









function createPromise(delay) {


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            const shouldResolve = beOrNotToBe()

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




function beOrNotToBe() {

    if (state && state.value === 'fulfilled') {
        return true
      }
}