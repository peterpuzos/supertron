/**
 * Created by HZ on 8/7/15.
 */
import alt from '../alt';
import RemoraActions from '../actions/RemoraActions';
import RemoraREST from '../api/RemoraREST';

class RemoraStore {
    constructor() {
        this.selectors = [];
        this.colOrder = [];
        this.headerCols = {};
        this.errorMessage = null;

        //this.bindActions(RemoraActions);

        this.bindListeners({
            handleUpdateSelectors: RemoraActions.UPDATE_SELECTORS,
            handleFetchSelectors: RemoraActions.FETCH_SELECTORS,
            handleSelectorsFailed: RemoraActions.SELECTORS_FAILED,
        });

        this.exportAsync(RemoraREST);
    }

    handleFetchSelectors() {
        this.selectors = [];
        this.colOrder = [];
        this.headerCols = {};
    }

    handleUpdateSelectors(selectors) {
        for (let selector of selectors) {
            var selectorKeys = Object.keys(selector);
            selectorKeys.forEach( (key) => {
                selector[key] = {content: selector[key]};
            });
        }
        this.selectors = selectors;

        if (selectors.length) {
            this.colOrder = selectorKeys;
            for (let selectorKey of selectorKeys) {
                this.headerCols[selectorKey] = {content: selectorKey};
            }
        }

        this.errorMessage = null;
        console.log(this.colOrder);
    }

    handleSelectorsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }

}

export default alt.createStore(RemoraStore, 'RemoraStore');