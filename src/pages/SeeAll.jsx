import React from 'react';
import Card2 from '../components/Card2';

function SeeAll() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 p-4">
      <Card2
        title="Dubai"
        price="9999"
        location="Al Fahidi - Dubai - United Arab Emirates"
        url="/Dubai.jpg"
      />
      <Card2
        title="Vietnam"
        price="7999"
        location="Hạ Long, Vietnam"
        url="/vietnam.jpeg"
      />
      <Card2
        title="Bhutan"
        price="4999"
        location="Thimphu, Bhutan"
        url="/bhutan.avif"
      />
      <Card2
        title="Thailand"
        price="6999"
        location="Bangkok, Thailand"
        url="/Thailand.avif"
      />
      <Card2
        title="Baku"
        price="8999"
        location="Baku, Azerbaijan"
        url="/baku.avif"
      />
      <Card2
        title="Nepal"
        price="3999"
        location="Annapurna, Narchyang, Nepal"
        url="/nepal.avif"
      />
    </div>
  );
}

export default SeeAll;
