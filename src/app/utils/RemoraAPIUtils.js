/**
 * Created by HZ on 8/7/15.
 */

import RemoraREST from '../api/RemoraREST';
import RemoraActions from '../api/RemoraActions';

module.exports = {

    getAllSelectors: function () {
        RemoraREST.getSelectors(function (selectors) {
            RemoraActions.receiveSelectors(selectors);
        });
    },

    checkoutProducts: function (products) {
        RemoraREST.buyProducts(products, function () {
            RemoraActions.finishCheckout(products);
        });
    }
};