const Downloader = {};
const ytdl = require("ytdl-core")

Downloader.DownloadVideo = (req, res, next) => {
    try {
        const url = req.query.url
        let audioName

        ytdl(url, {
            filter: 'audioonly'
        }).on('info', (info, error) => {
            if (info) {
                audioName = info.videoDetails.title
            } else {
                audioName = "Audio"
            }

            res.header("Content-Type: audio/mp3");
            res.header('Content-Disposition: attachment; filename="' + audioName + '.mp3"');
            res.attachment(audioName + '.mp3')
        }).pipe(res);

    } catch (error) {
        res.status(500).json({ error: "Video could not be converted", errorDescription: error.message })
    }
}

module.exports = Downloader;