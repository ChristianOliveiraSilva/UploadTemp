const fs = require('fs')

class FileManager {

    getFiles(res) {
        return fs.readdir(`${__dirname}/../public/files/`, (err, files) => {
            if (err) {
                console.log(err)
                res.render('index',{files: []});
            }

            files = files.filter(element => element != '.gitkeep')
            
            res.render('index', {files});
          })
    }

    uploadFiles(req, res) {
        const {files} = req.files

        files.forEach(file => {
            const uploadPath = `${__dirname}/../public/files/${file.name}`
    
            file.mv(uploadPath, function(err) {
                if (err)
                    return res.status(500).send(err);
            });
        });
    }
}

module.exports = new FileManager()