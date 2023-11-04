//install tanstack so you can use useQuery
//import useQuery
import { useQuery } from '@tanstack/react-query'
//install axios and import it
import axios from 'axios';

//create a custom hook useGetCat()
//always put your API calls to a Custom Hook
const useGetCat = () => {
    //create a useQuery(). this will handle all the fetched data for you
    //useQuery variables:
    //data is where fetched data is stored.
    //refetch is a function to refetch the data
    //isLoading is for while fetching the data, you can choose to display a text "Loading.." or add a loading spinner.
    //you can destructure the isLoading by "isLoading: isCatLoading", where the isCatLoading is your desired new name
    //["cat"] you need to create a unique key name for this useQuery. this is the first useQuery argument
    //2nd argument is the async fx for fetching data using axios
    //error, to catch all errors if any
    const { data, refetch, isLoading: isCatLoading, isError } = useQuery(["cat"], async () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data);
      });

      const refetchData = () =>{ 
        
        refetch();
      }
       
      //return all the needed useQuery variables and other fx
  return  {data, refetchData, isCatLoading, isError}
  
}
 

export default useGetCat