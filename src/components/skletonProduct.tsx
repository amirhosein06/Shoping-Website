import Skeleton from 'react-loading-skeleton'
const SkeletoProduct = () => {
    return (
        <div className='w-full h-full col-span-1 row-span-1'>
        <Skeleton circle={false} className='h-2/6' baseColor='#d4d4d8'/>
        <Skeleton circle={false} className='w-2/3 h-1/6' baseColor='#d4d4d8'/>
        <Skeleton circle={false} className='w-1/2 h-1/6' baseColor='#d4d4d8'/>
        <Skeleton circle={false} className='w-full h-1/6' baseColor='#d4d4d8'/>
        </div> 
     );
}
 
export default SkeletoProduct;