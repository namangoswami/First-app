const num_contact=10;

const firstNames=['Abcd','Efgh','Hijk','LMNO'];
const lastNames=['Efgh','Efgh','Efgh','Efgh'];

const rand=(max, min=0)=>Math.floor(Math.random()*(max-min+1))+min;

const generateName=()=>`${firstNames[rand(firstNames.length-1)]} ${lastNames[rand(lastNames.length-1)]}`;

const generatePhoneNumber=()=>`${rand(999,100)}-${rand(999,100)}-${rand(9999,1000)}`;
const createContact=()=>({name:generateName(), phone:generatePhoneNumber()});

export const compareNames=(contact1, contact2)=>contact1.name>contact2.name;

const addKeys=(val, key)=>({key, ...val});

export default Array.from({length:num_contact}, createContact).map(addKeys);