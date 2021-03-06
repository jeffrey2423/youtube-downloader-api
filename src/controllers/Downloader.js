const Downloader = {};
const ytdl = require("ytdl-core")

Downloader.DownloadVideo = (req, res, next) => {
    try {
        if (req.query.url) {
            const url = req.query.url
            let audioName

            ytdl(url, {
                filter: 'audioonly'
            }).on('info', (info) => {

                if (info) {
                    audioName = info.videoDetails.title
                } else {
                    audioName = "Audio"
                }

                res.header(`Content-Type: audio/mp3;`);
                res.header(`Content-Disposition: attachment; filename=${audioName}.mp3`);
                res.statusMessage = `${audioName}.mp3`
                res.attachment(audioName + '.mp3')

            }).pipe(res);
        } else {
            res.statusMessage = `Video could not be converted`
            res.status(500)
        }

    } catch (error) {
        res.statusMessage = "Video could not be converted " + error.message
        res.status(500)
    }
}

module.exports = Downloader;