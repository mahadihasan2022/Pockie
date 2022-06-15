import React from "react";
import Product from "../../Share/Product/Product";
import "./Home.css";
import Catagory from "../../Share/Catagory/Catagory";

const Home = () => {
  return (
    <div>
      <section>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://cdn.mos.cms.futurecdn.net/pXwzzWHiuDZixGE8rfjLCo.jpg"
              className="w-full"
              alt=""
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://www.powerplanetonline.com/cdnassets/iphone_13_pro_max_verde_alpino_01_l.jpg"
              className="w-full"
              alt=""
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://media.wired.com/photos/6202b99c2c286ef2d70b5b0a/master/pass/Gear-Samsung-Galaxy-S22-Ultra.jpg"
              className="w-full"
              alt=""
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://cf.shopee.com.my/file/33f731630061f786fcb58f170e551227"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="btn btn-xs">
            1
          </a>
          <a href="#item2" class="btn btn-xs">
            2
          </a>
          <a href="#item3" class="btn btn-xs">
            3
          </a>
          <a href="#item4" class="btn btn-xs">
            4
          </a>
        </div>
      </section>
      <section className="p-16">
       <div className="container">
          <div className="product-container">
          <div class="card card-compact w-40 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://oasis.opstatics.com/content/dam/oasis/page/2022/na/home/10pro-video/10provideo-mo.jpg"
                  alt="Phone"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title font-bold text-white pt-8">Phone!</h2>
                <p className="text-black font-semibold pt-4">The OnePlus 10 pro is a great premium all-round phone. It has a good looking screan, fast charging and powerful internals.The cherry on the cake is that it costs less than other Pro phones, making it an incredibly tempting choice. However, its Achilles Heel is the camera experience - there are a few problems with both the hardware and software that might put off passionate.</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card-container pr-8 pl-8">
              <div class="card w-76 h-100 glass p-4">
                <figure>
                  <img
                    src="https://ychef.files.bbci.co.uk/976x549/p09wrjyz.jpg"
                    alt="Luxury Food!"
                  />
                </figure>
                <div class="card-body border">
                  <h2 class="card-title text-white pt-8 font-bold">Life <span className="text-green-500"> hack!</span></h2>
                  <p className="text-black font-semibold pt-4">You will need to dip into your savings to indulge in these luxury foods from around the globe.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order now!</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 pl-24 pt-8">
              <div class="card card-compact w-36 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.shopify.com/s/files/1/1915/8837/products/HTB1N.tEQpXXXXcGaXXXq6xXFXXXU.png?v=1533049732"
                  alt="Men Collections"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-white font-bold pt-8">For <span className="font-bold text-orange-900">Men!</span></h2>
                <p className="text-black font-semibold pt-4">The most affordable, and popular choice to wear with suits. The formal dress shirt doesn't have a pocket on the chest area, making it more businesslike. The collar stands up to make the shirt look as formal as possible. </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card card-compact w-36 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://static-01.daraz.com.bd/p/d781da44a18c4ced0d9a9e9bb1a20160.jpg"
                  alt="Women Collections"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-white font-bold pt-8">For <span className="text-teal-900">Women!</span></h2>
                <p className="text-black font-semibold pt-4">Shalwar Kameez, also spelled salwar kameez or shalwar kameez, is a traditional outfit originating in the subcontinent. It is a generic term used to describe different styles of dress.</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card card-compact w-36 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.pinimg.com/564x/86/f2/29/86f229d5778e1130bf3f2c84c6638fcb.jpg"
                  alt="Kids Collections"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title font-bold text-white pt-8">For <span className="text-yellow-800">Kids!</span></h2>
                <p className="font-semibold text-black pt-4">White Button New Girls Peach And Grey Silk Readymade Lehenga Choli For Kids. Lehenga Choli Fabric Satin With Ambroidery Work. Lehenga Choli Inner Fabric Cotton N American Crepe.</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
              </div>
            </div>
          <div className="grid grid-rows-3 gap-2">
          <div class="card card-compact w-36 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://cdn.vox-cdn.com/thumbor/eTQhbaxDs6MYk3P1i5uMICW_iuM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22908906/vpavic_211006_4796_0061.jpg"
                  alt="Watch"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title font-bold pt-8 text-white">Watch!</h2>
                <p className="font-semibold text-black pt-4">Thankfully, each Apple Watch model offers ample functionality and has seen its fair share of discounts over the last year.</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card card-compact w-36 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-white font-bold pt-8">Shoes!</h2>
                <p className="text-black font-semibold pt-4">If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card card-compact w-36 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://static-01.daraz.com.bd/p/5372ae74ab266a7297d58620d01f62e7.jpg"
                  alt="Sunglass"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title font-bold text-white pt-8">Sunglass!</h2>
                <p className="font-semibold pt-4 text-black">Promotions available online! Shop the greatest selection of designer sunglasses choosing among the most stylish.</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section>
        <Catagory></Catagory>
      </section>
      <section>
        <Product></Product>
      </section>
    </div>
  );
};

export default Home;
