const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const fprobe = require('ffprobe-static');
 ffmpeg.setFfprobePath(fprobe.path)

var mergedVideo = ffmpeg();
var videoNames = ['music/sample.mp3','videos/video.mp4'];

videoNames.forEach(function(videoName){
    mergedVideo = mergedVideo.addInput(videoName);
});

mergedVideo.mergeToFile('mergedMedia/output.m3u8', 'temp/')
    .on('error', function(err) {
        console.log('Error ' + err.message);
    })
    .on('end', function() {
        console.log('Finished!');
    });

// ffmpeg('videos/video.mp4', { timeout: 432000 }).addOptions([
//     '-profile:v baseline',
//     '-level 3.0',
//     '-start_number 0',
//     '-hls_time 10',
//     '-hls_list_size 0',
//     '-f hls'
// ]).output('videos/output.m3u8').on('end', () => {
//     console.log('end');
// }).run();
