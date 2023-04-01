import { FC } from 'react'
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Headiing";
import { contactType } from '../../types';

type contactsTypeProps = {
  contacts: [contactType]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
};

const Contacts:FC<contactsTypeProps> = ({ contacts }) => { 
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts && contacts.map(({ id, name, email }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}><strong>{name}</strong> ( {email} )</Link>
            <br/>
            <br/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
