
import axios from 'axios'
let user_list = []
let id_list = []
let S_list = [] 
let D_list = []
let Tid_list = []
let DB_list = []
let Dexp_list = []
let key_list = []
let Amt_list = []
const fetchedResult = [];

async function makeGetRequest() {
    
    const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/Ticket');
    for (let key in res.data) {
    fetchedResult.unshift(
        {
            // ...res.data[key],
            username: res.data[key].user_customer,
            SourceS: res.data[key].S_Source,
            DestS: res.data[key].S_Dest,
            TID: res.data[key].ticket_id,
            Date_buy: res.data[key].Date_buy,
            Dexp: res.data[key].Date_exp,
            Amount: res.data[key].Amount,
            id : key
        }
    )
    id_list.push(res.data[key].id)
    user_list.push(res.data[key].user_customer)
    S_list.push(res.data[key].S_Source)
    D_list.push(res.data[key].S_Dest)
    Tid_list.push(res.data[key].ticket_id)
    DB_list.push(res.data[key].Date_buy)
    Dexp_list.push(res.data[key].Date_exp)
    Amt_list.push(res.data[key].Amount)
    }
}

makeGetRequest()

console.log(user_list)

export {user_list};
export {id_list};
export {S_list};
export {D_list};
export {Tid_list};
export {DB_list};
export {Dexp_list};
export {Amt_list};

