import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-8/12">
        <div
          className="text-left w-full mb-8 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <p className="flex items-center gap-2">
            <FaArrowLeft />
            Back To Posts
          </p>
        </div>
        <div className="border border-gray-200 px-6 py-8 rounded-md">
          <h2 className="text-xl font-bold mb-4">Create New Blog Post</h2>
          <div className="mb-4">
            <p className="text-base font-semibold mb-1">Title</p>
            <input
              type="text"
              placeholder="Enter post title"
              className="border rounded-md px-3 py-2 w-full border-gray-200"
            />
          </div>
          <div className="mb-4">
            <p className="text-base font-semibold">Cover Image URL</p>
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              className="border rounded-md px-3 py-2 w-full border-gray-200"
            />
          </div>
          <div className="mb-4">
            <p className="text-base font-semibold">Content</p>
            <textarea
              placeholder="Write your post content here..."
              className="border rounded-md px-3 py-2 w-full border-gray-200 h-80 mb-4"
            ></textarea>
            <div className="flex justify-end gap-1">
              <button
                className="border rounded-md border-gray-200 bg-transparent py-2 px-4"
              >
                Cancel
              </button>
              <input
                className="border rounded-md py-2 px-4 text-white bg-black"
                type="submit" value="Publish Post"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost