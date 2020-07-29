const multer = require("multer");

const storage = multer.diskStorage({
    //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, "./src/uploads");
    },
    filename: function (req, file, cb) {
        const datetimestamp = Date.now();
        try {
            cb(
                null,
                file.fieldname +
                    "-" +
                    datetimestamp +
                    "." +
                    file.originalname.split(".")[
                        file.originalname.split(".").length - 1
                    ]
            );
        } catch (err) {
            cb(err);
        }
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            ["png", "jpg", "jpeg"].indexOf(
                file.originalname.split(".")[
                    file.originalname.split(".").length - 1
                ]
            ) === -1
        ) {
            return callback(new Error("Wrong extension type"));
        }

        callback(null, true);
    },
});

module.exports = upload;
