var socket = io();

var  buton = document.querySelector(".tikla");
var video = document.querySelector("video");
buton.addEventListener("click",function(){

    socket.emit("video baslat",{status:"Video Başlatıldı", durum:1});

})


socket.on("VideStream",function(data){

        console.log(data)

       
        var cx = new Blob([new Uint8Array(data)], { type: "video/ogg" });

        console.log(video.src=cx)


})


