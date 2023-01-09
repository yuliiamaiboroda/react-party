import { useEffect } from "react";

export default function Currency() {
    useEffect(()=>{
        fetch('https://api.privatbank.ua/p24api/exchange_rates?date=09.01.2023').then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          }).then(console.log())
    })
    return;
}