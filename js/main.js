// $(document).on("click", ".launch-button", function () {
//     Swal.fire({
//         title: "The Internet?",
//         text: "That thing is still around?",
//         icon: "question"
//     });
// })

// $(document).on("keydown", function (e) {
//     console.log(e.key);

// })


// $(document).on("click", ".launch-button", function () {
//     var sayi1 = parseInt($(".sayi-1").val());
//     var sayi2 = $(".sayi-2").val();
//     console.log(sayi1 + parseInt(sayi2));

// })

var x = [
    { a: 2 },
    "elma",
    "portakal",
    "armut",
    "erik",
    "fişne"
];

x.push("kiwi")
// console.log(x)

// x.forEach(function (value, key){
//     console.log(key)
// })

var damla = {
    yas: 17,
    boy: 160,
    hobiler: ["yatmak", "uyumak", "yemek yemek", "oturmak"]
}



for (var key in damla) {
    console.log(damla[key])
}


function cikart(x, y) {
    return x - y;
}


console.log(cikart(10, 5));

function topla(status) {
    var sayi1 = $(".sayi-1").val();
    var sayi2 = $(".sayi-2").val();
    var toplam = parseInt(sayi1) + parseInt(sayi2);
    Swal.fire({
        position: "top-end",
        icon: status,
        title: `Toplam: ${toplam}`,
        showConfirmButton: false,
        timer: 1500
    });
}

$(document).on("click", ".launch-button", function () {
    topla("error")

})
$(document).on("keydown", function (e) {
    console.log(e)
    if (e.key === "Enter") {
        topla("success");
    }
})

// damla.hobiler.forEach(function(value, key){
//     console.log(key, value)
// })
