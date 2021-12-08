import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

const Home = ({ products }) => {
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Jungle</title>
            </Head>

            {/* Header */}
            <Header />

            <main className='max-w-screen-2xl mx-auto'>
                {/* Banner */}
                <Banner />

                {/* Product Feed */}
                <ProductFeed products={products} />
            </main>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

    return {
        props: {
            products,
        },
    };
};

export default Home;
