const login  = () => {
    return (
        <div className=" flex  text-center">
            <div className="h-screen w-4/12 max-w-screen-sm  bg-purple-700">
                <div className='m-10 h-5/6 mr-0 ml-24 bg-purple-600 shadow-2xl flex flex-col justify-around '>
                    <img src="kodeman_logo.jpeg" className='p-10' alt='kodeman_logo' />
                    <a href="#" className="text-white ">Already Have an Account?</a>
                </div>
            </div>
            <div className="h-screen bg-white w-full max-w-screen-sm">
                <div className='mt-10 mb-10 h-5/6 w-full bg-white shadow-2xl flex flex-col justify-around '>
                <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className='mb-12 '>
                        <h1 className=' text-5xl'>Create an Account</h1>
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    
                    <div class="mb-4">
                    <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>
                    
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default login