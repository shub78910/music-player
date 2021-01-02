// // const img = document.getElementById("image");
// // const music = document.getElementById("audio");
// // const play = document.querySelector(".play");


// //     play.addEventListener("click",()=>{
// //     music.play();
// //     play.classList.replace("fa-play","fa-pause");
// //     img.classList.add("animation");
// // })



// const img = document.getElementById("image");
// const music = document.getElementById("audio");
// const play = document.querySelector(".play");
// const songName = document.getElementById("songName");
// const artist = document.getElementById("artist");
// const Prev = document.getElementById("prev");
// const Forward = document.getElementById("fwd");

// songlist = [
// {
//     name: "Arnold Layne",
//     audio:"media used - music player/ArnoldLayne.mp3",
//     artist: "Pink Floyd",
//     img:"https://media.medialoper.com/wp-content/uploads/2019/05/Pink-Floyd-Arnold-Layne.jpg"
      
// },

// {
//     name:"Cold Cold Cold",
//     audio: "media used - music player/Cage The Elephant - Ain t No Rest For The Wicked.mp3",
//     artist: "Cage the Elephant" ,
//     img:"https://images.genius.com/0a0b62ad44af0f7f92bed1b757eb8983.960x960x1.jpg"
// },

// {
//     name: "Breaking the Habit",
//     audio: "media used - music player/BreakingTheHabit.mp3",
//     artist: "Linkin Park",
//     img:"https://upload.wikimedia.org/wikipedia/en/e/ec/Linkin_park_breaking_the_habit.png"
// }
// ]


// let playing = true

// playy = ()=>{
//     playing=false
//     music.play();
//     play.classList.replace("fa-play","fa-pause");
//     img.classList.add("animation");
// }

// pausee = ()=>{
//     playing=true
//     music.pause();
//     play.classList.replace("fa-pause","fa-play");
//     img.classList.remove("animation");
// }

// play.addEventListener("click",()=>{
//     if (playing){
//         playy()
//     }
//     else{
//         pausee()
//     }
// })


// //adding more and looping the songs

// const loadSong = (songlist)=>{
//     songName.textContent = songlist.name;
//     artist.textContent = songlist.artist;
//     music.src = songlist.audio;
//     img.src = songlist.img;
// }


// index=0;
// let prevsong = ()=>{
//     if (index==0){
//         index=songlist.length
//     }
//     index=index-1;
//     loadSong(songlist[index]);
//     playy()
    
// };

// let nextsong = ()=>{
//     index=(index+1)%songlist.length;
//     loadSong(songlist[index]);
//     playy()
// };


// Prev.addEventListener("click", prevsong)

// Forward.addEventListener("click", nextsong)
