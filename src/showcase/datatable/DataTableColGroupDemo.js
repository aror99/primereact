import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {ColumnGroup} from '../../components/columngroup/ColumnGroup';
import {Row} from '../../components/row/Row';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableColGroupDemo extends Component {

    constructor() {
        super();
        this.sales = [
            {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
            {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
            {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
            {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
            {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
            {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
            {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
            {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
            {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
            {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
        ];
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Brand" rowSpan={3} />
                                <Column header="Sale Rate" colSpan={4} />
                            </Row>
                            <Row>
                                <Column header="Sales" colSpan={2} />
                                <Column header="Profits" colSpan={2} />
                            </Row>
                            <Row>
                                <Column header="Last Year" />
                                <Column header="This Year" />
                                <Column header="Last Year" />
                                <Column header="This Year" />
                            </Row>
                        </ColumnGroup>;

       let footerGroup = <ColumnGroup>
                            <Row>
                                <Column footer="Totals:" colSpan={3} />
                                <Column footer="$506,202" />
                                <Column footer="$531,020" />
                            </Row>
                         </ColumnGroup>;
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Column Grouping</h1>
                        <p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components that both define an array of columns each having colspan and rowspan.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                        <Column field="brand" />
                        <Column field="lastYearSale" />
                        <Column field="thisYearSale" />
                        <Column field="lastYearProfit" />
                        <Column field="thisYearProfit" />
                    </DataTable>
                </div>

                <DataTableColGroupDemoDoc></DataTableColGroupDemoDoc>
            </div>
        );
    }
}

export class DataTableColGroupDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

export class DataTableColGroupDemo extends Component {

    constructor() {
        super();
        this.sales = [
            {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
            {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
            {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
            {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
            {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
            {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
            {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
            {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
            {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
            {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
        ];
    }

    render() {
        let headerGroup = <ColumnGroup>
                            <Row>
                                <Column header="Brand" rowSpan={3} />
                                <Column header="Sale Rate" colSpan={4} />
                            </Row>
                            <Row>
                                <Column header="Sales" colSpan={2} />
                                <Column header="Profits" colSpan={2} />
                            </Row>
                            <Row>
                                <Column header="Last Year" />
                                <Column header="This Year" />
                                <Column header="Last Year" />
                                <Column header="This Year" />
                            </Row>
                        </ColumnGroup>;

        let footerGroup = <ColumnGroup>
                            <Row>
                                <Column footer="Totals:" colSpan={3} />
                                <Column footer="$506,202" />
                                <Column footer="$531,020" />
                            </Row>
                            </ColumnGroup>;
        return (
            <div>
                <DataTable value={this.sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                    <Column field="brand" />
                    <Column field="lastYearSale" />
                    <Column field="thisYearSale" />
                    <Column field="lastYearProfit" />
                    <Column field="thisYearProfit" />
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

const DataTableColGroupDemo = () => {

    const sales = [
        {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
        {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
        {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
        {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
        {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
        {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
        {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
        {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
        {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
        {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
    ];

    let headerGroup = <ColumnGroup>
                        <Row>
                            <Column header="Brand" rowSpan={3} />
                            <Column header="Sale Rate" colSpan={4} />
                        </Row>
                        <Row>
                            <Column header="Sales" colSpan={2} />
                            <Column header="Profits" colSpan={2} />
                        </Row>
                        <Row>
                            <Column header="Last Year" />
                            <Column header="This Year" />
                            <Column header="Last Year" />
                            <Column header="This Year" />
                        </Row>
                    </ColumnGroup>;

    let footerGroup = <ColumnGroup>
                        <Row>
                            <Column footer="Totals:" colSpan={3} />
                            <Column footer="$506,202" />
                            <Column footer="$531,020" />
                        </Row>
                        </ColumnGroup>;
    return (
        <div>
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ColumnGroup} from 'primereact/columngroup';
import {Row} from 'primereact/row';

const DataTableColGroupDemo = () => {

    const sales = [
        {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
        {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
        {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
        {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
        {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
        {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
        {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
        {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
        {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
        {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
    ];

    let headerGroup = <ColumnGroup>
                        <Row>
                            <Column header="Brand" rowSpan={3} />
                            <Column header="Sale Rate" colSpan={4} />
                        </Row>
                        <Row>
                            <Column header="Sales" colSpan={2} />
                            <Column header="Profits" colSpan={2} />
                        </Row>
                        <Row>
                            <Column header="Last Year" />
                            <Column header="This Year" />
                            <Column header="Last Year" />
                            <Column header="This Year" />
                        </Row>
                    </ColumnGroup>;

    let footerGroup = <ColumnGroup>
                        <Row>
                            <Column footer="Totals:" colSpan={3} />
                            <Column footer="$506,202" />
                            <Column footer="$531,020" />
                        </Row>
                        </ColumnGroup>;
    return (
        <div>
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </DataTable>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataTableColGroupDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
