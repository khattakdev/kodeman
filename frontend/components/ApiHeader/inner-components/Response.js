function Response({ res }) {
  //   console.log(());
  return (
    <div>
      <h1 className="text-gray-500 px-4 flex content-start">Response</h1>
      <div className={'border m-4  bg-gray-800 border-gray-600'}>
        <div className={'flex p-4'}>
          <h3 className="text-gray-500 px-4 flex content-start">
            Status: <span className={'text-green-400 ml-2'}> {res.status}</span>
          </h3>
          <h3 className="text-gray-500 px-4 flex content-start">
            Response Time:{' '}
            <span className={'text-green-400 mx-2'}> {res.time}ms</span>
          </h3>
        </div>
        <textarea
          className={
            'border p-4 bg-gray-800 text-gray-400 border-gray-600 w-full min-h-10r'
          }
          placeholder="response body"
          value={JSON.stringify(res.data, undefined, '    ')}
        >
          {/* <textarea
            className={'flex min-h-10r'}
            
          ></textarea> */}
        </textarea>
      </div>
    </div>
  );
}

export default Response;
