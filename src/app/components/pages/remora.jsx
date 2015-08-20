import React from 'react';
import {Paper,
        Styles,
        Table,
        TextField,
        Toggle} from 'material-ui';
import FullWidthSection from '../full-width-section';
import RemoraStore from '../../stores/RemoraStore';
import RemoraActions from '../../actions/RemoraActions';

let { Spacing, Typography } = Styles;

class Remora extends React.Component {

    constructor() {
        super();

        this._onToggle = this._onToggle.bind(this);
        this._onRowSelection = this._onRowSelection.bind(this);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            canSelectAll: false,
            deselectOnClickaway: true,
            height: '400px'
        }
    }

    componentWillMount() {
        //RemoraStore.listen((data) => {
        //    this._onChange(data.selectors);
        //});

    }

    componentDidMount() {
        console.log(this.props)
        //executes when the component is about to mount onto DOM
        //if (!this.state.rowData.length) {
        //    RemoraActions.requestSelectors();
        //}
    }

    _getRemoraState() {
        return {
            rowData: RemoraStore.getState().rowData,
            tableProps: RemoraStore.getTableProps()
        };
    }

    _onChange(selectors) {
        for (let selector of selectors) {
            var selectorKeys = Object.keys(selector);
            selectorKeys.forEach(function (key) {
                selector[key] = {content: selector[key]};
            });
        }

        state.rowData = selectors;
        if (selectors.length) {
            state.colOrder = selectorKeys;
            state.headerCols = {}
            for (let selectorKey of selectorKeys) {
                state.headerCols[selectorKey] = {content: selectorKey};
            }
        }

        this.setState(state);
    }

    getStyles() {
        return {
            root: {
                paddingTop: Spacing.desktopKeylineIncrement
            },
            fullWidthSection: {
                maxWidth: '650px',
                margin: '0 auto'
            },
            headline: {
                fontSize: '36px',
                lineHeight: '44px',
                paddingTop: '16px',
                marginBottom: '12px',
                letterSpacing: '0',
                fontWeight: Typography.fontWeightNormal,
                color: Typography.textDarkBlack
            },
            title: {
                fontSize: '20px',
                lineHeight: '28px',
                paddingTop: '19px',
                marginBottom: '13px',
                letterSpacing: '0',
                fontWeight: Typography.fontWeightMedium,
                color: '#f00'//Typography.textDarkBlack
            },
            propContainerStyle: {
                width: '200px',
                overflow: 'hidden',
                margin: '20px auto 0 auto'
            }
        };
    }

    render() {

        if (this.props.errorMessage) {
            return (
                <div>{this.props.errorMessage}</div>
            );
        }

        let styles = this.getStyles();

        let headerCols = {id: {content: 'ID', tooltip: 'The ID'}, name: {content: 'Name', tooltip: 'The name'}, status: {content: 'Status', tooltip: 'The status'}};
        let colOrder = ['id', 'name', 'status'];
        let rowData = [
            {id: {content: '2'}, name: {content: 'Randal White'}, status: {content: 'Unemployed'}},
            {id: {content: '4'}, name: {content: 'Steve Brown'}, status: {content: 'Employed'}},
            {id: {content: '5'}, name: {content: 'Joyce Whitten'}, status: {content: 'Employed'}}
        ];

        //let footerCols = {id: {content: 'ID'}, name: {content: 'Name'}, status: {content: 'Status'}};

        return (
            <div>
                <FullWidthSection style={styles.FullWidthSection}>

                    <div className='table-remora'>
                        <Table
                            rowData={this.props.selectors}
                            headerColumns={this.props.headerCols}
                            //footerColumns={footerCols}
                            columnOrder={colOrder}
                            height={this.state.height}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            fixedHeader={this.state.fixedHeader}
                            fixedFooter={this.state.fixedFooter}
                            stripedRows={this.state.stripedRows}
                            showRowHover={this.state.showRowHover}
                            selectable={this.state.selectable}
                            multiSelectable={this.state.multiSelectable}
                            canSelectAll={this.state.canSelectAll}
                            onRowSelection={this._onRowSelection}/>

                        <div style={styles.propContainerStyle}>
                            <h3>Table Properties</h3>

                            <Toggle
                                name='fixedHeader'
                                label='Fixed Header'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.fixedHeader}/>

                            <Toggle
                                name='fixedFooter'
                                label='Fixed Footer'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.fixedFooter}/>

                            <Toggle
                                name='stripedRows'
                                label='Stripe Rows'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.stripedRows}/>

                            <Toggle
                                name='showRowHover'
                                label='Show Row Hover'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.showRowHover}/>

                            <Toggle
                                name='selectable'
                                label='Selectable'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.selectable}/>

                            <Toggle
                                name='multiSelectable'
                                label='Multi-Selectable'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.multiSelectable}/>

                            <Toggle
                                name='canSelectAll'
                                label='Can Select All'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.canSelectAll}/>

                            <Toggle
                                name='deselectOnClickaway'
                                label='Deselect On Clickaway'
                                onToggle={this._onToggle}
                                defaultToggled={this.state.deselectOnClickaway}/>

                        </div>
                    </div>

                </FullWidthSection>
            </div>
        );
    }

    _onToggle(e, toggled) {
        let state = {};
        state[e.target.name] = toggled;
        this.setState(state);
    }

    _onRowSelection(rows) {
        console.log(rows);
    }

}

export default Remora;
