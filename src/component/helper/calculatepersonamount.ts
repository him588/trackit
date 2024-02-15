import { person } from "../type";

function calculateveryentryamount(account: person) {
    const arrayofentry=account.entries
    let totalamount=0
    arrayofentry.forEach((entry)=>{
        totalamount+=entry.amount
    })
return totalamount
}

export default calculateveryentryamount