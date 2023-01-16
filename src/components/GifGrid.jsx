import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);
    
    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect( () => {
    //     getImages();
    // }, []);
    
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                // isLoading ? ( <h2>Cargando...</h2> ) : null
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
                {
                    // Tarea como lo hice yo 
                    // images.map(img => (
                    //     <li key={ img.id }>{ img.title }</li>
                    // ))

                    // images.map(({ id, title }) => (
                    //     <li key={ id }>{ title }</li>
                    // ))

                    images.map(( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))

                }
            </div>
        </>
    )
}
