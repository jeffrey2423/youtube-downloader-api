const { Router } = require("express")
const downloadsRouter = Router();

const Downloader = require('../controllers/Downloader');


downloadsRouter.route('/DownloadVideo')
    .get(Downloader.DownloadVideo)

module.exports = downloadsRouter;