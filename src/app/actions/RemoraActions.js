/**
 * Created by HZ on 8/7/15.
 */

import alt from '../alt';
import RemoraREST from '../api/RemoraREST';

class RemoraActions {
    constructor() {
        //this.generateActions(
        //    'fetchSelectors'
        //);
    }

    fetchSelectors()
    {
        this.dispatch();
    };

    updateSelectors(selectors)
    {
        this.dispatch(selectors);
    };

    selectorsFailed(errorMessage)
    {
        this.dispatch(errorMessage);
    };

    //requestSelectors() {
    //
    //    RemoraREST.getSelectors().then( (response) => {
    //        this.actions.receiveSelectors(response.data);
    //    }).catch( (error) => {
    //        console.log(error);
    //    });
    //}

}

export default alt.createActions(RemoraActions);