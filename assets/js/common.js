jQuery(document).ready(function() {
    // GIF favicon，只有firefox & IE支援，需以js動態換圖
    var favicon_images = ['assets/images/gir_sperate/1.png', 'assets/images/gir_sperate/2.png', 'assets/images/gir_sperate/3.png'],
        image_counter = 0; // To keep track of the current image

    setInterval(function() {
        $("link[rel='icon']").remove();
        $("link[rel='shortcut icon']").remove();
        $('head').append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

        // If last image then goto first image
        // Else go to next image
        if (image_counter == favicon_images.length - 1) image_counter = 0;
        else image_counter++;
    }, 200);
});
