import Delete from "../components/Delete.jsx"
import Show from "../components/Show.jsx"
import Create from "../components/Create.jsx"

export default function Home(){
    return(
        <>
           <div>
            <div>
                <h1 className="text-center"> CRUD </h1>
                <div>
                    <Show> 
                        <div>
                        </div> 
                    </Show>
                </div>
            </div>
           </div>
           <div>
            <Delete/>
           </div>
           <div>
            <Create/>
           </div>
        </>
    )
}