/* 封面圖片上傳範例 可以重寫 */
const actualBtn = document.getElementById('imageUpload');
const fileChosen = document.getElementById('file-chosen');

// 上傳圖片檔名顯示
actualBtn.addEventListener('change', function(){
    fileChosen.textContent = this.files[0].name
})

// 預覽圖片
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.imagePreview').css('background-image', 'url('+e.target.result +')');
            $('.imagePreview').hide();
            $('.imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageUpload").change(function() {
    readURL(this);
});

/* 影音上傳範例 可以重寫 */

/* 預覽影音 */
const previewUpload = document.getElementById('previewUpload');
const previewFileChosen = document.getElementById('preview-file-chosen');

const previewSoundUpload = document.getElementById('previewSoundUpload');
const previewSoundFileChosen = document.getElementById('previewSound-file-chosen');

// 預覽影音檔名顯示
previewUpload.addEventListener('change', function(){
    previewFileChosen.textContent = this.files[0].name
});

previewSoundUpload.addEventListener('change', function(){
    previewSoundFileChosen.textContent = this.files[0].name
});

$("#previewUpload").change(function () {
    var fileInput = document.getElementById('previewUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".previewVideo").attr("src", fileUrl);
});

$("#previewSoundUpload").change(function () {
    var fileInput = document.getElementById('previewSoundUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".previewSoundVideo").attr("src", fileUrl);
});

/* 起始影音 */
const startUpload = document.getElementById('startUpload');
const startFileChosen = document.getElementById('start-file-chosen');
const startSoundUpload = document.getElementById('startSoundUpload');
const startSoundFileChosen = document.getElementById('startSound-file-chosen');

// 起始影音檔名顯示
startUpload.addEventListener('change', function(){
    startFileChosen.textContent = this.files[0].name
});
startSoundUpload.addEventListener('change', function(){
    startSoundFileChosen.textContent = this.files[0].name
});

$("#startUpload").change(function () {
    var fileInput = document.getElementById('startUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".startVideo").attr("src", fileUrl);
});
$("#startSoundUpload").change(function () {
    var fileInput = document.getElementById('startSoundUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".startSoundVideo").attr("src", fileUrl);
});
/* 中間影音 */
const middleUpload = document.getElementById('middleUpload');
const middleFileChosen = document.getElementById('middle-file-chosen');
const middleSoundUpload = document.getElementById('middleSoundUpload');
const middleSoundChosen = document.getElementById('middleSound-file-chosen');

// 中間影音檔名顯示
middleUpload.addEventListener('change', function(){
    middleFileChosen.textContent = this.files[0].name
});
middleSoundUpload.addEventListener('change', function(){
    middleSoundChosen.textContent = this.files[0].name
});

$("#middleUpload").change(function () {
    var fileInput = document.getElementById('middleUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".middleVideo").attr("src", fileUrl);
});
$("#middleSoundUpload").change(function () {
    var fileInput = document.getElementById('middleSoundUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".middleSoundVideo").attr("src", fileUrl);
});
/* 結束影音 */
const endUpload = document.getElementById('endUpload');
const endFileChosen = document.getElementById('end-file-chosen');
const endSoundUpload = document.getElementById('endSoundUpload');
const endSoundChosen = document.getElementById('endSound-file-chosen');

// 結束影音檔名顯示
endUpload.addEventListener('change', function(){
    endFileChosen.textContent = this.files[0].name
});
endSoundUpload.addEventListener('change', function(){
    endSoundChosen.textContent = this.files[0].name
});

$("#endUpload").change(function () {
    var fileInput = document.getElementById('endUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".endVideo").attr("src", fileUrl);
});
$("#endSoundUpload").change(function () {
    var fileInput = document.getElementById('endSoundUpload');
    var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
    $(".endSoundVideo").attr("src", fileUrl);
});