import { useEffect, useState } from "react";

export const useFetch = ({ url }: { url: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
useEffect(()=>{
    const controller = new AbortController()
    setIsLoading(true)
    fetch(url,{signal:controller.signal})
    .then(data => console.log(JSON.stringify(data)))
})
  return {isLoading,data,error};
};

