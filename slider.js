function showLoading() {
    const loading = document.getElementById("loading");
    loading.style.display = "block";
    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);
}
const slider = [
    {id: 1,
     image: "https://www.shutterstock.com/image-photo/sunset-over-calm-waters-napili-600nw-2628814271.jpg"
    },
    {
        id: 2,
        image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/calming-nature-wallpaper-free-image.jpeg?w=600&quality=80"
    },
    {
        id: 3,
        image:"https://static.vecteezy.com/system/resources/thumbnails/051/953/787/small/a-majestic-lion-rests-on-a-rock-under-dramatic-clouds-showcasing-its-powerful-presence-photo.jpg"
    },
    {
        id: 4,
        image:"https://4kwallpapers.com/images/walls/thumbs/16906.png"
    },
    {
        id: 5,
        image:"https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-sunset-images-free-download-free-landscape-wallpapers-image_2913889.jpg"
    },

]


function slideShow() {

  let index = 0;
  const box = document.getElementById("slider");
  const startButton = document.getElementById("start");
    startButton.addEventListener("click", () => {
        const show = setInterval(() => {
            box.innerHTML = "";
            const img = document.createElement("img");
            img.src = slider[index].image;
            box.appendChild(img);
            index = (index + 1) % slider.length;
        }, 1000);
    });
}
slideShow();