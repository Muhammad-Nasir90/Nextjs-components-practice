export default async function About () {
    await new Promise((resolve =>{
        setTimeout(resolve,5000)
    })) 



    return (
        <div className="background flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-opacity-50 text-6xl">
            
            <h1 className="p-20 font-semibold font-serif text-2xl underline"><b><u />Loading Statement:</b></h1>
            <br />
            <p>
            </p>    

        </div>
    )
}