import React from 'react';
import './Category.css';

const Category = () => {

    
    return (
        <div className='pt-8'>
            <h1 className='text-2xl font-bold pt-4 pl-12 pb-8'>Our Product category</h1>
            <div className='grid grid-cols-5 gap-2 pl-12'>
            <div className='flex justify-center items-center bg-color'>
                    <button className='font-bold text-2xl text-black btn btn-primary'>Add Category <span className='font-bold text-2xl'>+</span></button>
                </div>
                <button className='card-border'>
                    <img src="https://i01.appmifile.com/webfile/globalimg/in/cms/9EA54327-1EDE-2AC9-0883-B5932DEE4B3E.jpg" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Sunglass</h2>
                </button>
                <button className='card-border'>
                    <img src="https://media.istockphoto.com/photos/fashion-model-in-long-dress-back-view-woman-beauty-in-gown-rear-view-picture-id1155692472?k=20&m=1155692472&s=612x612&w=0&h=ehvC6h1cB9zgyrkuXBonZhg-PsYMGZFxRlKFpqseKDY=" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Fashion</h2>
                </button>
                <button className='card-border'>
                    <img src="https://manofmany.com/wp-content/uploads/2015/06/products.jpg" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Home & Life</h2>
                </button>
                <button className='card-border'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxttsR6WZfNjRsDjmdLACen2DkaNiDrb6jHA&usqp=CAU" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Technology</h2>
                </button>
                <button className='card-border'>
                    <img src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22033_16430370682719147.jpg" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Cosmetics</h2>
                </button>
                <button className='card-border'>
                    <img src="https://cdn.pixabay.com/photo/2019/07/11/12/15/luxury-4330594_960_720.jpg" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>luxury Food</h2>
                </button>
                <button className='card-border'>
                    <img src="https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc=" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Shoes</h2>
                </button>
                <button className='card-border'>
                    <img src="https://www.alaminjewellers.com/wp-content/uploads/2021/03/AL-AMIN-JEWELLERS-AAJ-1-NECKLACE-89-scaled.jpg" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>Jewellery</h2>
                </button>
                <button className='card-border'>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Pixel_Watch_ff.jpg?bXdCUDddPmM_kJofQOSV8PZQqaRy6Qje&size=1200:675" alt=""  className='w-full h-40'/>
                    <h2 className='text-xl pt-4 text-center text-black font-bold'>watch</h2>
                </button>
            </div>  
            <div className='pt-12'>
                <button className='btn btn-primary w-full'>See All Categories</button>
            </div> 
        </div>
    );
};

export default Category;