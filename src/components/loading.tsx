import { NotificationCircle } from "iconsax-react";

const Loading = () => {
    return ( 
        <div className="w-full h-96 flex items-center justify-center gap-5">
             <NotificationCircle size={34} color="#18181b" className="animate-spin"/>
             <h1 className="text-zinc-900">Loading ...</h1>
        </div>
     );
}
 
export default Loading;