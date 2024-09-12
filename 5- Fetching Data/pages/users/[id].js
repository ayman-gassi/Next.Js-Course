import Head from "next/head";

export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
    const paths = data.map((elm) => {
        return{
            params : { id : elm.id.toString() }
        }
    })
    return {
        paths,
        fallback : false
    }
}
export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
  const data = await res.json();
    return {
        props : { AllData : data}
    }

}
const User = ({AllData}) => {
    
    return ( 
        <>
        <Head>
          <title>Learning | User Detail</title>
        </Head>
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Detail</h3>
          <div className="space-y-2">
            <h3 className="text-xl text-blue-600 font-medium">{AllData.name}</h3>
            <p className="text-gray-600">Email: {AllData.email}</p>
            <p className="text-gray-600">Phone: {AllData.phone}</p>
            <p className="text-gray-600">Website: {AllData.website}</p>
          </div>
        </div>
      </>
     );
}
 
export default User;