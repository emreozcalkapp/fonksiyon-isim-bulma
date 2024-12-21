// Bir obje dizisinde verilen isme sahip kişiyi bulan bir fonksiyon yazın.  

// Adımlar:

// find kullanılarak bir obje aranır.

// Her obje için isim kontrolü yapılırç

// İlk eşleşen obje döndürülür.

const persons = [
    {
        id: 1,
        firstName: "Emre",
        lastName: "Özçalkap",
        age: 24
    },
    {
        id: 2,
        firstName: "Görkem",
        lastName: "Süslü",
        age: 25
    },
    {
        id:3,
        firstName: "Emir",
        lastName: "Ünal",
        age: 24
    },
    {
        id:4,
        firstName: "Elif",
        lastName: "Çavuş",
        age: 9
    },
    {
        id: 5,
        firstName: "Ömer",
        lastName: "Kaya",
        age: 15
    },
    {
        id: 6,
        firstName: "Emir",
        lastName: "Demir",
        age: 29
    },
    {
        id:7,
        firstName: "Elif",
        lastName: "Özçalkap",
        age: 26
    }
];

const findByName = persons.find(person => person.firstName === "Emir");

console.log(findByName);
