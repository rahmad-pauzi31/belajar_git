// var products = ["Senter", "Radio", "Antena", "Obeng"];

 //document.write("<h3>Daftar Produk:</h3>");
 //document.write("<ol>");
 
 //for(let i = 0; i < products.length; i++){
    // document.write(`<li>${ products[i] }</li>`);
 //}
 //document.write("</ol>");


 //var products = ["angur" , "apel", "mangga", "jeruk", "nanas"];

 //document.write("<h1>daftar nama nama buah:</h1>");
//document.write("<ol>");

//products.forEach((data) => {

  // document.write(`<li>${data}</li>`);
// });
//document.write("</ol>");


var products = ["mobil" , "motor", "kereta", "becak", "sepeda"];
 products.push("pesawat" , "heli kopter");
 products.shift();
 products.pop();
 products.splice(4);

 var barang = products[2];
 products[3] = "sabun";
 document.write("<h1>daftar kendaraan:</h1>");
 document.write("<ol>");

    for(let i = 0; i < products.length; i++){
      document.write(`<li>${ products[i] }</li>`);
    }
 document.write("</ol>");
 document.write(barang);


 //var results = ''
 //function hello(name) {
   // const say = 'Hello, '
   
    //if(name){
      //results = say + name + '!'
    //} else {
    //  results = say + ' World!'
   // }
    //return results;
  //}
  
  //hello('johN');
 // hello('Alice');
//   hello('dylan');
  //hello();

//document.write(results);


//for (let angka = 0; angka <= 10; angka++) {
  //  const element = array[angka];
    //if(element % 2 == 0){   console.log(element); 
    //}
    
//}




//angka yang bisa di bagi 2 tanpa sisa
//const angka = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

 //const filteredArray = angka.filter(item => item % 2 === 0);

//console.log(filteredArray)

//mencari data di dalam array
//var tanaman = ["Padi", "Kacang", "Jagung", "Kedelai"];
//tanaman.push("cabai");


//var adaKacang = tanaman.includes("Kacang");

//console.log(adaKacang); 


//var adaBayam = tanaman.includes("Bayam");

//console.log(adaBayam); 

//var adacabai = tanaman.includes("cabai");
//console.log(adacabai);

//mengurutkan data
//var alfabet =['C','A','B'];
//alfabet.push("F", "E");
//console.log(alfabet.sort());

//var adaC =alfabet.includes("C");
//console.log(adaC);

//var adaQ =alfabet.includes("Q");
//console.log(adaQ);



function namaFungsi(){
    document.write("Hello World!");
    }
    sayHellow()
