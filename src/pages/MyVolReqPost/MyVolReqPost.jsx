import axios from "axios";
import { useEffect } from "react";

const MyVolReqPost = () => {
   useEffect(() => {
      fetchData();
   }, []);
   const fetchData = async () => {
      const { data } = await axios.get();
   };
   return <div className='my-14'>MyVolReqPost</div>;
};

export default MyVolReqPost;
