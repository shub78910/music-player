
const img = document.getElementById("image");
const music = document.getElementById("audio");
const play = document.querySelector(".play");
const songName = document.getElementById("songName");
const artist = document.getElementById("artist");
const Prev = document.getElementById("prev");
const Forward = document.getElementById("fwd");
const currTime = document.getElementById("currentTime")
const totTime = document.getElementById("totalTime")
let myBar = document.getElementById("myBar")
let myProgress = document.getElementById("myProgress")
let list_of_songs = document.querySelector(".list_of_songs")

songlist = [
{
    name: "Arnold Layne",
    audio:"media used - music player/ArnoldLayne.mp3",
    artist: "Pink Floyd",
    img:"https://media.medialoper.com/wp-content/uploads/2019/05/Pink-Floyd-Arnold-Layne.jpg"
      
},

{
    name:"Cold Cold Cold",
    audio: "media used - music player/Cage The Elephant - Ain t No Rest For The Wicked.mp3",
    artist: "Cage the Elephant" ,
    img:"https://images.genius.com/0a0b62ad44af0f7f92bed1b757eb8983.960x960x1.jpg"
},

{
    name: "Breaking the Habit",
    audio: "media used - music player/BreakingTheHabit.mp3",
    artist: "Linkin Park",
    img:"https://upload.wikimedia.org/wikipedia/en/e/ec/Linkin_park_breaking_the_habit.png"
},
{
    name: "That's my name",
    audio: "media used - music player/That'sMyName.mp3",
    artist: "Akcent",
    img:"https://i.scdn.co/image/ab67616d00001e02e97ab60c199b5c8f17efc6b6"
},
{
    name: "Skyfall",
    audio: "media used - music player/Skyfall.mp3",
    artist: "Adele",
    img:"https://upload.wikimedia.org/wikipedia/en/a/a7/Skyfall_poster.jpg"
}

]
let html="";
songlist.map((item,index)=>{
    html += `
    <li id="indi_song" onClick="gotoSong(${index})">${item.name} <br> <span id="artistname">${item.artist}</span></li>`
})
list_of_songs.innerHTML = html;

function gotoSong(index){
loadSong(songlist[index])
playy()
}


let playing = false

playy = ()=>{
    playing=true
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("animation");
    // move()
}

pausee = ()=>{
    playing=false
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("animation");
    // clearInterval(id);
}

play.addEventListener("click",()=>{
    if (!playing){
        playy()
    }
    else{
        pausee()
    }
    
})


//adding more and looping the songs


function loadSong(songlist){
    songName.innerText = songlist.name;
    artist.innerText = songlist.artist;
    music.src = songlist.audio;
    img.src = songlist.img;
}


index=0;
let prevsong = ()=>{
    if (index==0){
        index=songlist.length
    }
    index=index-1;
    loadSong(songlist[index]);
    playy()

};

let nextsong = ()=>{
    index=(index+1)%songlist.length;
    loadSong(songlist[index]);
    playy()
};

//new part of adding the progress bar and time.

music.addEventListener("timeupdate", (event)=>{
    const {currentTime,duration}=event.srcElement;
    // console.log(event.srcElement)

    //this is all to print the current time on html.

    let cur_min =  Math.floor (currentTime/60)
    let cur_sec =  Math.floor (currentTime%60)

    if (cur_min<10 && cur_sec<10){
        currTime.textContent = `0${cur_min}:0${cur_sec}`
    }
    else if(cur_min<10 && cur_sec>=10){
        currTime.textContent = `0${cur_min}:${cur_sec}`
    }
    else{
        currTime.textContent = `${cur_min}:${cur_sec}`
    }
    // currTime.textContent = `${cur_min}:${cur_sec}`



    //This all is for putting the duration of the song in html.
    let min = Math.floor (duration/60)
    let sec=Math.floor(duration%60)
    if (duration){
        if (min<10 && sec<10){
        totTime.textContent = `0${min}:0${sec}`
        }
        else{
            totTime.textContent = `${min}:${sec}` 
        }
    }
    // console.log(Math.floor(currentTime),min,sec)


    //This is for changing the width of the progress bar.
    let percentTime = (currentTime/duration)*100
    myBar.style.width = `${percentTime}%`
})


//To go to next song when song ends

music.addEventListener("ended", nextsong);


myProgress.addEventListener("click",(event)=>{
    const{duration } = music;


    let move_prog =Math.floor ((event.offsetX/event.srcElement.offsetWidth)*duration);
    // console.log(move_prog)
    // console.log(event.offsetX)
    // console.log(event.srcElement.offsetWidth)
    music.currentTime=move_prog;
})

Prev.addEventListener("click", prevsong)

Forward.addEventListener("click", nextsong)

//CAUTION! THERE IS A PROBLEM WITH OFFSET WIDTH OT CLIENT WIDTH.
// WHENEVER WE TRY TO GO BACK IT CHANGES AUTOMATICLAYY 
// FIND SOLUTION FOR THAT!


//make a seperate division somewhere and map through the list and display all the song names.
//then add click listeners for all and call loadsong with the appropriate index number.


//This was how i tried to make the progress bar.

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 0;
//     var id = setInterval(frame, 1000);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }
