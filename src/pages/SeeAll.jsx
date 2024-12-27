import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Card2 from '../components/Card2';
import ClipLoader from 'react-spinners/ClipLoader';

function SeeAll() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [searchParams] = useSearchParams(); 

  useEffect(() => {
    const category = searchParams.get('cat');

    const fetchData = async () => {
      try {
       
        setLoading(true); 
        const response = await axios.get(`https://expedigo-backend.onrender.com/${category}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    if (category) {
      fetchData(); 
    }
  }, [searchParams]);

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          
          <ClipLoader color="#3498db" size={50} /> 
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
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
      )}
    </div>
  );
}

export default SeeAll;
