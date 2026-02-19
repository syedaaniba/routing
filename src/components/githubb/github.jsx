import { useEffect, useState } from "react";

function GitHub() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github followers: {data.followers}</p>
      <img 
        src={data.avatar_url} 
        alt="GitHub Avatar"
        width={300}
      />
    </div>
  );
}

export default GitHub;
