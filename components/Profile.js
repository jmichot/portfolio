import Image from 'next/image';
import Layout from './Layout';

const Profile = (props) => {
  return (
    <Layout bgColor='bg-sky-100'>
      <div className='max-w-4xl m-auto flex gap-20'>
        <div className='my-auto flex flex-col text-center text-gray-500'>
          <h1 className='text-6xl font-bold text-slate-700'>Julien Michot</h1>
          <h1 className='text-2xl font-bold text-indigo-600'>
            Développeur FullStack
          </h1>
        </div>
        <div className='relative w-96 h-52'>
          <Image src={'/keyboard.jpg'} layout='fill' className='rounded-3xl' />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
