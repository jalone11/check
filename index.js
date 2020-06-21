const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const  getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
  }
pets.forEach(item => item.age = getAge(item))
console.log(pets)

  const dogs = [];
  dogs.filter(pet => pets.type=== 'dog')
  }
  console.log(dogs);