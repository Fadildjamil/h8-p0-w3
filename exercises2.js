// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

// Example
// input "hello world!"
// output
// "!dlrow olleh"

// Hints
// Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya. Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!


// Code here 

function balikString(string){
  
  var tampung='';
  
  for(var i=string.length-1; i>=0; i--){
    tampung += string[i];
  }
  return tampung;
  
}

console.log(balikString('hello world!'));