const express = require('express');
const router = express.Router();
const komikController = require('../controller/komikController');

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.get('/komik', komikController.createKomik);
router.get('/komik/:id', komikController.updateKomik);
router.get('/komik/:id', komikController.deleteKomik);

module.exports = router;