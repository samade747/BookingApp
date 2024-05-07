import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css';

export default function Home() {
    return (
        <div>
          <Navbar />
           <Header />
        <div className='homeContainer'>
            <Featured />
            <Header />
            <div className='homeContiner'>
                <Featured />
            <h1 className='homeTitle'>browse by property type</h1>
            <PropertyList />
            <h1 className='homeTitle'>home guests love</h1>
            <FeaturedProperties />  
            <MailList />
            <Footer />
            </div>


         </div>
        </div>
    )
}