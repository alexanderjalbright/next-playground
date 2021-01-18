import { useEffect } from 'react';

export default function App({ tests }) {    
    return <div><ul>
      {tests.name.map(test => (<li key={test.id}>{test.stringField}</li>))}
    </ul></div>;
}
export const getServerSideProps = async () => {

    const response = await fetch('http://localhost:3000/api/test', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const tests = await response.json()
    console.log('log')
    return { props: { tests } };
};
