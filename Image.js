/**
 * Created by madjake45 on 09/10/2014.
 */
var img = [

    "http://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg",
    "http://carrotsncake.com/wp-content/uploads/2010/02/J3zoipBQBpxank53ZCeZo8UIo1_500.jpg",
    "https://c1.staticflickr.com/3/2482/3626712341_f0441c3fb4.jpg",
    "http://thumbs.dreamstime.com/x/%E7%96%AF%E7%8B%82%E7%9A%84%E8%A1%A8%E9%9D%A2%E6%84%89%E5%BF%AB%E7%9A%84%E5%93%88-%E7%8B%97-2364792.jpg",
    "http://www.vikingmops.com/images/10.%20Happy%20Pug.jpg",
    "http://media-cache-ec0.pinimg.com/736x/ca/2f/a6/ca2fa6ad200a7bb933fc3812affd28a6.jpg",
    "http://3.bp.blogspot.com/_frdFfbyVDwQ/TQuQvDb59PI/AAAAAAAADFM/NVnfxC6cMhk/s400/puglights.bmp",
    "http://pugtailsdotnet.files.wordpress.com/2011/01/dsc_0120.jpg",
    "http://pugtailsdotnet.files.wordpress.com/2011/10/puggasaurus-rex.jpg",
    "http://imagecdn.bodybuilding.com/img/user_images/growable/2010/10/28/30317372/gallerypic/uKpiMKcAwWAYJRosUucSiVkChrTsANBJRxAC-610xh.jpg",
    "https://c1.staticflickr.com/9/8204/8261440430_bafcfaba92.jpg",
    "http://www.jointhepugs.com/wp-content/uploads/2013/04/nicolas-sanin-mantilla-goliat--500x481.jpg",
    "http://www.jointhepugs.com/wp-content/uploads/2013/07/bowtie-pug-puppy-500x500.jpg",
    "http://www.jointhepugs.com/wp-content/uploads/2013/11/Flying-Pug.jpg",
    "http://www.pugs.nl/images/pug0507.jpg",
    "http://s3.gossipcop.com/up/gallery/celebs-easter-photos-2014/robin.png",
    "https://pbs.twimg.com/profile_images/417701354325291008/4fRKKBZB.jpeg",
    "https://pbs.twimg.com/profile_images/2020469856/pug-pugs-239511_407_436.jpg",
    "http://www.jointhepugs.com/wp-content/uploads/2013/08/Pug-Hugs-All-Around.jpg",
    "http://www.jointhepugs.com/wp-content/uploads/2013/11/Upside-Down-Pug-.jpg",
    "http://www.jointhepugs.com/wp-content/uploads/2013/09/Pug-Charms.jpg",
    "http://hdwallpapersnext.com/wp-content/uploads/2014/06/smiling-pug1.jpg",
    "http://i.dailymail.co.uk/i/pix/2013/06/13/article-2340930-1A4BC38A000005DC-21_634x410.jpg",
    "http://www.funnypugpictures.co.uk//wp-content/uploads/2014/01/harry-potter-pug-costume.jpg",
    "http://i.huffpost.com/gen/808608/thumbs/o-PUG-AVENGERS-facebook.jpg",
    "http://media-cache-ec0.pinimg.com/736x/aa/7b/7f/aa7b7fc155728d3dd7701ceb055b0dba.jpg",
    "http://4.bp.blogspot.com/-guGTxHoKteU/UIaHmQPiw7I/AAAAAAAAB28/Vh5VQPbFz_A/s400/WeddingPug.jpg",
    "http://cdn77.sadanduseless.com/wp-content/uploads/2014/09/animal-selfies17.jpg"


];

function image(){
    var x = document.getElementById("pugimage").src;
    var pugimage = img[Math.floor(Math.random() * img.length)];
    while(pugimage == x){
        pugimage = img[Math.floor(Math.random() * img.length)];
    }
        document.getElementById("pugimage").src = pugimage;
        setTimeout(image, 10000);
}

function firstimage(){
    var pugimage = img[Math.floor(Math.random() * img.length)];
    document.getElementById("pugimage").src = pugimage;
}
setTimeout(image,10000);
