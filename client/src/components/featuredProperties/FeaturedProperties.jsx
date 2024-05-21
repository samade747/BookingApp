import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import { Spin } from "antd";


const FeaturedProperties = () => {  
    const { data, loading, error } = useFetch("http://localhost:5000/api/hotels/countByType");
    return (
    <div className="fp">
        <Spin trip="Loading..." size="large">
        </Spin>
    </div>      
    : 
    <>{data?.map((item) => (



    }  
    
    
    </>
    )

}
