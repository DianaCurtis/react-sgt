/*index files are what servers first look for*/


export function randomString(length = 8){

    const characters='aAbBcCdDeEfFgGhHiIjJkKlLoOpPqQrRsStTuUvVwWxXyYzZ0123456789';

    let output='';

    for(let i  =0; i<length; i++){
        const randomIndex=Math.floor(Math.random()*characters.length);

        output += characters[randomIndex];
    }

    return output;
}


export function formatPostData(data){
    const urlParams = new URLSearchParams();

            /* destructuring the array in []*/
                                /*object.entries creates an aray of arrays, takes the key/value puts it into an array then puts that into one array will all arrays*/
    for(let [key,value] of Object.entries(data)){

        urlParams.append(key,value);
    }

    return urlParams;

}