import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";


// 
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    // es dupqum kveradardzni 404 errore
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
};

const Contacts = ({ contacts }) => { 
  return (
    <>
      <Head>
        <title>{Contacts}</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts && contacts.map(({ id, name }) => (
          <li key={id}>
            {/* <Link href={`/contacts/${id}`}>{name}</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;