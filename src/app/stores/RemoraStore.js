/**
 * Created by HZ on 8/7/15.
 */

'use strict';

import alt from '../alt';
import RemoraActions from '../actions/RemoraActions';

class RemoraStore {
    constructor() {
        this.bindActions(RemoraActions);
        this.selectors = [];
    }

    onAddToCart(selector) {
        this.decreaseInventory(selector);
    }

    onReceiveSelectors(selectors) {
        this.selectors = selectors;
    }
}

module.exports = alt.createStore(RemoraStore, 'RemoraStore');