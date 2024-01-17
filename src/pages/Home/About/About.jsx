import img from '../../../assets/img6.webp'

const About = () => {
    return (
        <div>
            <div className="min-h-screen bg-base-200 mt-10">
                <div className='text-center text-3xl pt-6'>
                    <p className='font-bold pt-6'>About Us</p>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse mt-10">
                    <img src={img} className="w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">More Than 2+ Years We Provide True News_</h1>
                        <p className="py-6">In a groundbreaking development, researchers have unveiled a new era in sustainable energy with the introduction of highly efficient solar panels poised to revolutionize the renewable power landscape. The innovative technology, developed by a collaborative team of scientists and engineers, promises to address longstanding challenges in solar energy production.electricity. This breakthrough not only enhances the overall performance of solar power systems but also has the potential
                            The novel design incorporates advanced materials and manufacturing techniques, enhancing durability and longevity while maintaining affordability. The research team believes that this innovation could accelerate the global transition to renewable energy, offering a more sustainable and environmentally friendly alternative to conventional power sources.

                            Government officials, environmentalists, and industry leaders have expressed excitement about the potential impact of this breakthrough on the fight against climate change. As countries around the world continue to prioritize clean energy initiatives, this discovery marks a critical step forward in achieving a greener and more sustainable future..</p>
                        <button className="btn btn-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;