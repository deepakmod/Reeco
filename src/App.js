import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Main from "./components/Table/Main";
import {useDispatch} from "react-redux";
import {setOrders} from "./redux/orderSlice";
import {useEffect} from "react";
function App() {

  const dispatch = useDispatch();

    useEffect(() => {
        let data = [
            {
                name: 'Beef Steak, Angus Sirloin, Premium Cut',
                brand: 'Prime Cuts Delights',
                price: '$56.78 / 2 * 1LB',
                quantity: '8 x 2 * 1LB',
                total: '$7890.12',
                status: '',
            },
            {
                name: 'Salmon Fillets, Wild-Caught, Skin-On',
                brand: 'Ocean Harvest',
                price: '$34.21 / 5 * 1LB',
                quantity: '3 x 6 * 1LB',
                total: '$4321.09',
                status: '',
            },
            {
                name: 'Pork Chops, Bone-In, Hickory Smoked',
                brand: 'Smokehouse Meats',
                price: '$45.67 / 4 * 1LB',
                quantity: '2 x 7 * 1LB',
                total: '$6543.21',
                status: '',
            },
            {
                name: 'Turkey Breast, Oven-Roasted, Sliced',
                brand: 'Gourmet Delights',
                price: '$12.34 / 8 * 1LB',
                quantity: '6 x 5 * 1LB',
                total: '$9876.54',
                status: '',
            },
            {
                name: 'Lamb Chops, French-Cut, Grass-Fed',
                brand: 'Eco Farms',
                price: '$78.90 / 1 * 1LB',
                quantity: '1 x 8 * 1LB',
                total: '$1234.56',
                status: '',
            },
            {
                name: 'Shrimp, Jumbo, Peeled and Deveined',
                brand: 'Seafood Delights',
                price: '$67.89 / 6 * 1LB',
                quantity: '4 x 3 * 1LB',
                total: '$3456.78',
                status: '',
            },
            {
                name: 'Chicken Wings, Buffalo Style, Party Pack',
                brand: 'WingMaster',
                price: '$32.10 / 9 * 1LB',
                quantity: '9 x 1 * 1LB',
                total: '$2109.87',
                status: '',
            },
            {
                name: 'Ground Beef, Lean, 93% Fat-Free',
                brand: 'Healthy Choices',
                price: '$54.32 / 7 * 1LB',
                quantity: '7 x 9 * 1LB',
                total: '$8765.43',
                status: '',
            },
            {
                name: 'Cod Fillets, Wild-Caught, Skinless',
                brand: 'FreshCatch',
                price: '$43.21 / 10 * 1LB',
                quantity: '10 x 10 * 1LB',
                total: '$1098.76',
                status: '',
            },
        ];
        dispatch(setOrders(data));
    }, [dispatch]);

  return (
    <div className="App bg-[#FBFBFB]">
        <Navbar/>
        <Header/>
        <Section/>
        <Main />
    </div>
  );
}

export default App;
