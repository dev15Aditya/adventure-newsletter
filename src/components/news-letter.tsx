
interface NewsLetterProps {
    heading: string,
    newsletterContent: string,
}

const NewsLetter = (
    {heading, newsletterContent}: NewsLetterProps
) => {

    const setNewsletterContent = (content: string) => {
        console.log(content)
    }
  return (
    <div className=" bg-white rounded-lg p-6 text-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">
              Edit Newsletter
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {/* Customize and update your newsletter content. */}
              {heading}
            </p>

            {/* Newsletter Editor */}
            <textarea
              className="w-full mt-4 p-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
              rows={8}
              value={newsletterContent}
              onChange={
                (e) => setNewsletterContent(e.target.value)
              }
              placeholder="Type your newsletter content here..."
            ></textarea>

            {/* Save and Cancel Buttons */}
            <div className="mt-4 flex justify-end space-x-3">
              <button
                // onClick={cancelEditing}
                className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                // onClick={saveNewsletter}
                className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
  )
}

export default NewsLetter
