/**
 * Created by HZ on 8/7/15.
 */

/**
 * Mocking client-server processing
 */
'use strict';

import axios from 'axios';

var RemoraREST = exports;

RemoraREST.getSelectors = function (cb, timeout) {

    return axios.get('')

    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb(_products);
    }, timeout);
};

RemoraREST.buyProducts = function (payload, cb, timeout) {
    timeout = timeout || TIMEOUT;
    setTimeout(function () {
        cb();
    }, timeout);
};