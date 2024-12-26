const NewsLetter = () => {
   return (
      <div className='text-center py-10 rounded-md my-10 bg-secondary'>
         <h2 className='text-3xl font-semibold mb-4 text-neutral'>
            Subscribe to our Newsletter
         </h2>
         <p className='mb-6 text-neutral'>
            Get the latest reviews, game news, and more directly to your inbox.
         </p>
         <form className='flex justify-center items-center mx-2'>
            <input
               type='email'
               placeholder='Enter your email'
               className='p-2 md:p-3 rounded-l-sm border-none w-full max-w-72'
               required
            />
            <button
               type='submit'
               className='bg-success p-2 md:p-3 rounded-r-sm text-black font-semibold'>
               Subscribe
            </button>
         </form>
      </div>
   );
};

export default NewsLetter;
