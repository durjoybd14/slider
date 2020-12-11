// day-8

// project-slider

var myPhotos=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg"];

var imgTag=document.querySelector("img");
var count=0;

function next() {
    count++;
    if (count>=myPhotos.length){
        count=0;
        imgTag.src=myPhotos[count];
    }
        else{
            imgTag.src=myPhotos[count];
        }

    
}

function previous() {
    count--;
    if (count<0){
        count=myPhotos.length-1;
        imgTag.src=myPhotos[count];
    }
        else{
            imgTag.src=myPhotos[count];
        }

    
}