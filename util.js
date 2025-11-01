
export default function generateRandomNumbers(){
    return Math.floor(Math.random()*100+1)
}

// normal export
export function generateNow(n){
    return n*10;
}

// // export using mudule.exports
// module.exports = {
//     generateRandomNumbers,
//     generateNow
// };

