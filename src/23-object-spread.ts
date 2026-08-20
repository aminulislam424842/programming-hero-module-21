const color1:{first:string,second:string} = {first:"red",second:"green"};
const color2:{third:string} = {third:"yellow"};

const combine = {...color1,...color2}

console.log(combine)