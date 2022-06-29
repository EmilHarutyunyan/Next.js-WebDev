import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";


export const getServerSideProps = async (context) => {
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
const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export default Contact;