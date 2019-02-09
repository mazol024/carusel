const numberParis = 81;
const numberBuda = 28;
const numberSpain = 124;
const numberGreece = 55;
const pictures =  {
    paris: {
        title: 'France',
        pictures: []
    },
    spain: {
        title: 'Spain',
        pictures: []
    },
    buda: {
        title: 'Hungary',
        pictures: []
    },
    greece: {
        title: 'Greece',
        pictures: []
    },
    dunedin: {
        title: 'Dunedin NZ',
        pictures: []
    },
};

for (let i = 0; i < numberParis; i++) {
    pictures.paris.pictures.push("assets/paris/" + (i+1).toString()+ ".jpg");
}

for (let i = 0; i < numberBuda; i++) {
    pictures.buda.pictures.push("assets/buda/" + (i+1).toString()+ ".jpg");
}
for (let i = 0; i < numberSpain; i++) {
    pictures.spain.pictures.push("assets/spain/" + (i+1).toString()+ ".jpg");
}
for (let i = 0; i < numberGreece; i++) {
    pictures.greece.pictures.push("assets/greece/" + (i+1).toString()+ ".jpg");
}
export default pictures;