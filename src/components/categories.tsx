import electeronic from './../assets/pink-headphones-wireless-digital-device.jpg'
import jew from './../assets/collection-colorful-bracelets-with-word-maharani-side.jpg'
import men from './../assets/colorful-tshirts-wooden-clothes-hanger-hanging-clothing-rack-white-background_43448-439.avif'
import women from './../assets/female-autumn-clothes-hangers-white-room_176873-12982.avif'

const Categories = () => {
    return ( 
        <div className="w-full h-80 md:h-64 shadow rounded z-20 mb-2 bg-white p-3 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-3">
            {[['Electronics',electeronic],
                ['Jewelery',jew],
                ["Men's clothing",men],
                ["Women's clothing",women]].map((item : string[], index : number)=>(
                    <div key={index}
                    style={{backgroundImage: `url(${item[1]})`}}
                     className="categores_imgae_1313 w-full h-full pl-7 text-2xl text-white font-semibold rounded col-span-1 row-span-1 cursor-pointer flex items-center">
                    <h1 className='z-40'>{item[0]}</h1>
                    </div>
                ))}
        </div>
     );
}
 
export default Categories;