import { GetStaticProps } from 'next';
import User from '@/models/commands/UserCommand';

interface HomeProps {
    users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json(); // 명시적으로 User[] 타입 지정

    return {
        props: { users },
    };
};

function Home({ users }: HomeProps) {
    const test01 = (users: User[]): void => {
        console.log("hello world");
        console.log(users);
    };

    return (
        <div>
            <h1>Tests</h1>
            <button onClick={() => test01(users)}>Test Users</button>
        </div>
    );
}

export default Home;
