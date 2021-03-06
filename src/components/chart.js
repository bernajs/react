import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
import _ from 'lodash'

export default(props) => {
    function average(data) {
        return _.round(_.sum(data) / data.length);
    }
    return (
        <Sparklines height={120} width={120} data={props.data}>
            <SparklinesLine color={props.color}></SparklinesLine>
            <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
            <div>{average(props.data)} {props.units}</div>
        </Sparklines>
    );
};
