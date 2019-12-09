import React, {component} from 'react'
import { BarChart, Bar, XAxis, YAxis, LabelList, Text, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [{name: 'Never', votes: 43}, {name: 'Some', votes: 30}, {name: 'Often', votes: 4}, {name: 'Always', votes: 2}];


const Chart = () => (
  <BarChart width={800} height={450} data={data} margin={{ top: 60, right: 20, bottom: 25, left: 20 }}>
    <XAxis dataKey="name" stroke="#8884d8" hide={false}  />
    <YAxis />
    <Tooltip />

    <Text scaleToFit={false} width="0"/>
      <Bar type="monotone" dataKey="votes" fill="#8884d8" barSize={200} >
      </Bar>
  </BarChart>
);

export default Chart