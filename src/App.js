import { useEffect } from "react";
import { dataService } from "./services/generalService/dataService";
export const App = () => {
  useEffect(()=>{
    dataService.removeData()
    dataService.initData();
  },[])
  return (
    <div className="App">
      <h1>My First Project</h1>
    </div>
  );
}

