// document.getElementById("upload_widget_opener").addEventListener("click", function () {
//  cloudinary.openUploadWidget({
//   cloud_name: 'shayan-dev',
//   upload_preset: 'fojw1igo',
//   max_image_width: 500,
//   max_image_height: 300,
//   cropping: 'server'
//   //crop: 'limit'
//  },
//   function (error, result) {
//    console.log(error, result)
//    // Push URL into text input
//    document.getElementById('url_text').value = result[0].url;
//    res.redirect("/files");
//   });
// }, false);

var myCropWidget = cloudinary.createUploadWidget({
 cloudName: 'shayan-dev', uploadPreset: 'fojw1igo', folder: 'widgetdocs',
 cropping: false,
 searchByRights: true,
 //croppingShowDimensions: true,
 sources: ['local', 'camera', 'facebook', 'instagram'],
 maxImageWidth: 500,
 maxImageHeight: 400,
 showCompletedButton: true,
 showUploadMoreButton: false,
 singleUploadAutoClose: false
},
 (error, result) => { console.log(error, result) })
document.getElementById("upload_widget_opener").addEventListener("click", function () {
 myCropWidget.open();
}, false);
