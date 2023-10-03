import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const postQuery = async(contactData)=> {
    const response = await axios.post(`${base_url}enquiry`, contactData);
    if(response.data){
        return response.data;
    }
}

// const addToWishlist = async(prodId)=> {
//     const response = await axios.put(`${base_url}product/wishlist`, {prodId}, config);
//     if(response.data){
//         return response.data;
//     }
// }

export const contactService = {
    postQuery,  
}