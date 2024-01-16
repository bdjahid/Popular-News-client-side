import './paralax.css'
import image from '../../../assets/news.jpg'
const Paralax = () => {
    return (
        <div>
            <section className="pt-10 item-bg my-10 bg-fixed">
                <div className="md:flex justify-center items-center pb-20 pt-10 px-36 bg-slate-500 bg-opacity-50">
                    <div className='w-full' >
                        <img src={image} alt="" />
                    </div>
                    <div className="md:ml-10 text-white">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline mt-5 border-0 border-b-4">Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Paralax;