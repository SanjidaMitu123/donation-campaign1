import { Pie, PieChart } from "recharts";


const Statistics = () => {
 

const data01 = [
  {
    "name": "MY DONATION",
    "value": 7000
  }
];
const data02 = [
  {
    "name": "TOTAL DONATION",
    "value": 14000
  }
];
    return (
        <div>
            <PieChart width={730} height={250} >
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#FF444A" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#00C49F" label />

            </PieChart>
        </div>
    );
};

export default Statistics;