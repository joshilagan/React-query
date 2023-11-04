import React from 'react'
//import your Custom Hook which is useGetCat()
import useGetCat from './useGetCat'


const Home = () => {
  //declare your Custom Hook inside the Home fx along with the variables needed you need to use here, so that you can call it anywhere inside the Home fx
  const {data, isCatLoading, refetchData, isError} = useGetCat();
  //use the isCatLoading for the Loading process and set it as a condition inside an if statement then return a loading text if the statement is true
  if (isCatLoading) return <h1> Loading...</h1>

  if (isError) return <h1>Error..</h1>
  
  return (
  <h1>
    {/* trigger the refetchData onClick */}
    <button onClick={refetchData}>Refetch</button>
    {/* call out the data variable inside the <p>tag to display 
    the fetched API data */}
    {/* the question mark is there so that if the fetched data is still null, do not display it yet. */}
    <p> {data?.fact}</p>
    </h1>  
  )  
}

export default Home