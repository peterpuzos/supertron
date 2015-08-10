/**
 * Created by HZ on 8/7/15.
 */

import alt from '../alt';
import RemoraAPIUtils from '../utils/RemoraAPIUtils';

class RemoraActions {
    constructor() {
        this.generateActions(
            'receiveSelectors',
            'addSelectors',
            'editSelectors',
            'deleteSelectors',
            'completeAdd'
        );
    }

    cartCheckout(products) {
        this.dispatch(products);
        RemoraAPIUtils.checkoutProducts(products);
    }
}

alt.createActions(RemoraActions, exports);