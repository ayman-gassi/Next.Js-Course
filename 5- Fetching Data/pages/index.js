import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
  return {
    props: { AllData: data },
  };
};

export default function Home({ AllData }) {
  return (
    <>
      <Head>
        <title>Learning | Home</title>
      </Head>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul className="list-disc space-y-3">
          {AllData.map((elm) => (
            <li key={elm.id} className="text-lg">
              <Link href={"users/" + elm.id}><h3>{elm.name}</h3></Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
