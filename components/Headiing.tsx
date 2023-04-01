import { FC, ReactNode } from 'react'
// import { headingType } from '../types';

// type headingProps = {
//     children: ReactNode

// }

const Heading = ( props: any ) => {
    const Tag = props.tag || 'h1';
    return <Tag>{props.text}</Tag>
}
  
export default Heading;