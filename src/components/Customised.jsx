import Btn from './Btn';
import Token from './Token';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

function Customised() {
  const [Packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/packages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <>
      <div className='px-8 py-3 mt-5 ' id="packages">
        <div className='p-10 flex flex-col md:flex-row lg:flex-row gap-5 md:gap-2 items-center justify-between'>
          <div>
            <h1 className=' font-inter text-5xl font-semibold text-center md:text-left lg:text-left'>
              Explore Customized Packages
            </h1>
          </div>
          <Link to={'/see-all?cat=packages'}>
            <Btn />
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <div className="
          grid 
          grid-cols-1 gap-2 
          sm:grid-cols-2 sm:gap-2
          md:grid-cols-3 md:gap-3 
          lg:grid-cols-4 lg:gap-4 
          xl:grid-cols-4 xl:gap-5 
          2xl:grid-cols-4 2xl:gap-5
          pl-16
        ">
          {Packages.map((item, index) => (
            <Token key={index} destination={item.destination} url={item.url} packages={item.packages} />
          ))}
        </div>
      )}
    </>
  );
}

export default Customised;
