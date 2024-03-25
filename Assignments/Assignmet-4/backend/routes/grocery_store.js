import express from 'express';
import { getLoggerInstance } from '../logger.js';
import { getSafewayStoreSettings } from '../controller/getSafewayStores.js';
const logger = getLoggerInstance();
const grocery_store = express.Router();


grocery_store.get('/', async(req, res) => {
    const stores = await getSafewayStoreSettings();
    logger.info("Fecth data successfully from github.");

    res.status(200);

    res.json(stores);
});

//Filtering store by zip code
grocery_store.post('/zipcode', async (req, res) => {
    try {
        // Extract the ZIP 
        const { zipCode } = req.body;

        if (!zipCode) {
            return res.status(400).json({ message: "zipCode is required." });
        }

        const settings = await getSafewayStoreSettings();

        // Filter the stores based on provided ZIP code
        const storesInZip = settings.ecomStores.filter(store =>
            store.mappedZipCodes.includes(zipCode)
        );        

        // Check if there are stores in the specified ZIP code and respond accordingly
        if (storesInZip.length > 0) {
            logger.info('Store on Zipcode:', storesInZip);
            res.json(storesInZip);
        } else {
            res.status(404).json({ message: "No stores found in the provided ZIP code." });
        }
    } catch (error) {
        logger.error('Error in POST /store-by-zip:', error);
        res.status(500).json({ message:'Internal Server Error'});
    }
});


export default grocery_store;