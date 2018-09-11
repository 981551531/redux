import apiUrl from '../../config/apiUrl'
import fetchApi  from '../fetchApi' ;
 
class homeSer{
    async getNewsType(){
         let url=apiUrl.nerType;
         let parames={
             "cuid":"E9B6D887A88ADB68E584F8D353E34C16:FG=1" ,
         "type":"tag",
         "OS":"iphone",
         "ver":9 ,
         "from":"webapp"  ,
         "rand":"1536564797969"
         }
         console.log("进入了")
       let data= await  fetchApi.POST(url,parames);
         return data;
     }
}

export default  homeSer;