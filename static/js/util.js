reflowLayout();
document.body.style.zoom = "100%";
readSlider = document.getElementById("streamSlider");
recordingState = false;
var recordButton = document.getElementById("recordCSV");

window.onresize = function(event) {
    reflowLayout();
};

function reflowLayout() {
    if (window.innerHeight/window.innerWidth >= 1.2)
    {
        console.log("Mobile Mode triggered.");
        let classList = document.getElementsByClassName('block-cover');

        for (let item of classList) {
            item.style.width = "100%";
            item.style.height = "30%";
        }
    }
    else
    {
        let classList = document.getElementsByClassName('block-cover');
        console.log("Landscape Mode triggered.");
        for (let item of classList) {
            let width1 = 'calc(50% - 3px)';
            item.style.width = width1;
			item.style.height = 'calc(50% - 3px)';
        }
    }
}

readSlider.addEventListener('change', (event) => {
    if(readSlider.checked) {
        console.log("Streaming started.");
        uploadButton.disabled = true;
    }
    else
    {
        console.log("Streaming stopped.");
        uploadButton.disabled = false;
    }
});





