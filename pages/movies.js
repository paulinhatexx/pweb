export default function Movies({data}){

    return (

        <div>

            <div>

            {data.Search.map( (m) => <div>{m.Title} --- {m.Year}<img src={m.Poster}></img></div> )}               

            </div>

        </div>

    )

}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=fa840d1b&s=bagdad`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }