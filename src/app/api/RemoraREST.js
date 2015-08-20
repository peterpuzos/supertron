/**
 * Created by HZ on 8/7/15.
 */

import axios from 'axios';
import RemoraActions from '../actions/RemoraActions';

let RemoraREST = {
    fetchSelectors() {
        return {
            remote() {
                return new Promise(function(resolve, reject) {
                    axios.get('http://localhost:1337/books')
                        .then( function(response) {
                            resolve(response.data);
                        })
                        .catch( function(response) {
                            reject("Server failed to fetch selectors");
                        });
                });
            },

            local() {
                // Never check locally, always fetch remotely.
                return null;
            },

            success: RemoraActions.updateSelectors,
            error: RemoraActions.selectorsFailed,
            loading: RemoraActions.fetchSelectors
        }
    }
}

export default RemoraREST;