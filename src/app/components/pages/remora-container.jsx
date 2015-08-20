import React from 'react';
import AltContainer from 'alt/AltContainer';
import RemoraStore from '../../stores/RemoraStore';
import Remora from './remora';

class RemoraContainer extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        RemoraStore.fetchSelectors();
    }

    render() {
        return (
            <AltContainer store={RemoraStore}>
                <Remora />
            </AltContainer>
        );
    }

}

export default RemoraContainer;