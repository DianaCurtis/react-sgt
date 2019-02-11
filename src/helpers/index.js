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