import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines'

const Chart = (props) => {
    console.log(props);
    return (
        <Sparklines height={120} width={120} data={props.temps}>
            <SparklinesLine color="blue"></SparklinesLine>
        </Sparklines>
    );
};

export default Chart;