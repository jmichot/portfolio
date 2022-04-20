import Layout from './Layout';

const Intro = () => {
  return (
    <Layout bgColor='bg-blue-200'>
      <div className='max-w-4xl my-auto ml-12 flex gap-20'>
        <div className='my-auto flex flex-col text-center text-gray-500'>
          <h1 className='text-6xl font-bold text-slate-700'>Julien Michot</h1>
          <h1 className='text-2xl font-bold text-indigo-600'>
            Développeur FullStack
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Intro;
