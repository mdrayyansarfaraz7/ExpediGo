import { useState, useEffect } from 'react';
import Card from './Card';
import Btn from './Btn';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';

function TopDestinations() {
  const [ExploreData, setExploreData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExploreData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/india');
        const data = response.data;
        
        // Assuming the response data is an array and you want the last 4 items
        const lastFourItems = data.slice(-4);
        setExploreData(lastFourItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExploreData();
  }, []);

  return (
    <>
      <div className='px-8 py-3 mt-5'>
        <div className='p-10 flex flex-col md:flex-col lg:flex-row gap-5 md:gap-2 items-center justify-between'>
          <div>
            <h1 className='font-inter text-5xl font-semibold text-center md:text-center lg:text-left'>
              Explore Top Destinations
            </h1>
            <p className='mt-10 font-inter text-slate-600 text-lg md:w-[700px] lg:w-[850px] xl:w-[1000px] 2xl:w-[1150px] text-center md:text-center lg:text-left'>
              Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </p>
          </div>
          <Link to={'/see-all?cat=india'}>
            <Btn />
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <div className="flex flex-wrap gap-12 justify-center">
          {ExploreData.map((item, index) => (
            <Card key={index} destination={item.destination} url={item.url} price={item.price} />
          ))}
        </div>
      )}
    </>
  );
}

export default TopDestinations;
