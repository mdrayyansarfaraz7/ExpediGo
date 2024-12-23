import  { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Card2 from '../components/Card2';

function SeeAll() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams(); 

  useEffect(() => {
    const category = searchParams.get('cat');

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/${category}`);
        setData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (category) {
      fetchData(); 
    }
  }, [searchParams]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 p-4">
      {data.map((item, index) => (
        <Card2
          key={index}
          title={item.destination}
          price={item.price}
          location={item.location}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default SeeAll;
