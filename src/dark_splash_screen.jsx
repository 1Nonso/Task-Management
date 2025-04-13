import { useState } from "react";

function SplashScreen(props) {

    let [isloading, setIsLoading] = useState(true);
    
    const time = new Date();
    const time_dic = {
         hour: time.getHours(),
         sec: time.getSeconds(),
         min: time.getMinutes()
     }
     
     const HandleLoadingComplete = () => {
            setTimeout(()=>{ setIsLoading(false)},5000);
              
            let np =   isloading==false ? (<div> {time_dic.hour}:{time_dic.min}:{time_dic.sec}</div>): "";
            [isloading, setIsLoading]= useState(true)
            
            return np
    }
    console.log(isloading);
    return (
        <div className="splash-screen">
            < HandleLoadingComplete />
            
        </div>
    );




    
}

export default SplashScreen;
// export default HandleLoadingComplete;