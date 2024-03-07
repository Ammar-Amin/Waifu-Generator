let btn = document.querySelector('button');
let img = document.querySelector('img');
let h5 = document.querySelector('h5');


// let imgDiv = document.querySelector('#img');
// let img = document.createElement('img');

btn.addEventListener('click', async () => {
    try {
        h5.style.visibility = 'visible';
        h5.innerHTML = "Loading Image...";
        h5.style.textAlign = "center";

        setTimeout(() => {
            h5.style.visibility = "hidden";
        }, 2000)


        let response = await fetch('https://api.waifu.pics/nsfw/waifu')
        let resData = await response.json();
        // console.log(resData);

        img.src = resData.url;
        // imgDiv.appendChild(img);
    } catch (error) {
        h5.style.color = "white";
        h5.style.textAlign = "center";
        h5.innerHTML = error;
    }
})